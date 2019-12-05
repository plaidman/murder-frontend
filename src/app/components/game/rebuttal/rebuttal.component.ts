import { Component, Input, OnChanges } from '@angular/core';
import { GameEngineService } from 'src/app/services/game-engine.service';
import { Card, Game } from 'src/app/services/gameModels';

@Component({
    selector: 'app-rebuttal',
    templateUrl: './rebuttal.component.html',
    styleUrls: ['./rebuttal.component.scss']
})
export class RebuttalComponent implements OnChanges {
    @Input() public game: Game;
    @Input() public playerId: string;
    public accusationCard: Card;

    constructor(
        private gameService: GameEngineService,
    ) {}

    public ngOnChanges() {
        const accuserId = this.game.accuserIds[this.game.currentAccuser];
        const accuserCards = this.game.players[accuserId].handCards;
        this.accusationCard = accuserCards[accuserCards.length - 1];
    }

    public explainTheEvidence() {
        this.gameService.startExplanation({ cardId: undefined });
    }

    public passTheBlame() {
        this.gameService.passTheBlame();
    }
}
