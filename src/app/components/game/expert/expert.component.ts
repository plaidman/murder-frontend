import { Component, Input, OnChanges } from '@angular/core';
import { GameEngineService } from 'src/app/services/game-engine.service';
import { Card, Game } from 'src/app/services/gameModels';

@Component({
    selector: 'app-expert',
    templateUrl: './expert.component.html',
    styleUrls: ['./expert.component.scss']
})
export class ExpertComponent implements OnChanges {
    @Input() public game: Game;
    @Input() public playerId: string;
    public accusationCard: Card;

    constructor(
        private gameService: GameEngineService,
    ) {}

    public ngOnChanges() {
        // TODO better title for this pane
        // todo select card after explain evidence is not working

        const accuserId = this.game.accuserIds[this.game.currentAccuser];
        const accuserCards = this.game.players[accuserId].handCards;
        this.accusationCard = accuserCards[accuserCards.length - 1];
    }

    public conclusive() {
        this.gameService.expertAnalyzed({ conclusive: true });
    }

    public inconclusive() {
        this.gameService.expertAnalyzed({ conclusive: false });
    }
}
