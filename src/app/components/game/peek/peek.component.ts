import { Component, Input, OnChanges } from '@angular/core';
import { GameEngineService } from 'src/app/services/game-engine.service';
import { Card, Game } from 'src/app/services/gameModels';

@Component({
    selector: 'app-peek',
    templateUrl: './peek.component.html',
    styleUrls: ['./peek.component.scss']
})
export class PeekComponent implements OnChanges {
    @Input() public game: Game;
    @Input() public playerId: string;
    public accusationCard: Card;
    public accuserId: string;

    constructor(
        private gameService: GameEngineService,
    ) {}

    public ngOnChanges() {
        this.accuserId = this.game.accuserIds[this.game.currentAccuser];
        const accuserCards = this.game.players[this.accuserId].handCards;
        this.accusationCard = accuserCards[accuserCards.length - 1];
    }

    public thing() {
        if (this.game.accuseeSwapCardId) {
            // display the card that the accusee swapped
        } else {
            // let the accuser choose a card from the accusee pile
        }
    }

    public expertOpinion() {
        this.gameService.startExpertOpinion();
    }
}
