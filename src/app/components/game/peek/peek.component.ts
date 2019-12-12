import { Component, Input, OnChanges } from '@angular/core';
import { findCardById } from 'src/app/services/findCardById';
import { GameEngineService } from 'src/app/services/game-engine.service';
import { Card, Game } from 'src/app/services/gameModels';
import { hiddenCard } from 'src/app/services/hiddenCard';

@Component({
    selector: 'app-peek',
    templateUrl: './peek.component.html',
    styleUrls: ['./peek.component.scss']
})
export class PeekComponent implements OnChanges {
    @Input() public game: Game;
    @Input() public playerId: string;
    public peekCard: Card;
    public accuserId: string;
    public accusationCard: Card;

    constructor(
        private gameService: GameEngineService,
    ) {}

    public ngOnChanges() {
        this.accuserId = this.game.accuserIds[this.game.currentAccuser];

        const accuserCards = this.game.players[this.accuserId].handCards;
        this.accusationCard = accuserCards[accuserCards.length - 1];

        if (this.game.accuseeSwapCardId) {
            // todo there is no way of knowing which card this is, if the accusee passed the blame

            if (this.playerId !== this.accuserId) {
                this.peekCard = hiddenCard;
                return;
            }

            this.peekCard = findCardById(this.game, this.game.accuseeSwapCardId, false);
            return;
        }


        this.peekCard = undefined;
    }

    public expertOpinion() {
        this.gameService.startExpertOpinion();
    }
}
