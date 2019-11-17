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
        const accusorId = this.game.accusorIds[this.game.currentAccusor];
        const accusorCards = this.game.players[accusorId].handCards;
        this.accusationCard = accusorCards[accusorCards.length - 1];
    }

    public explainTheEvidence() {
        this.gameService.explainTheEvidence();
    }

    public passTheBlame() {
        this.gameService.passTheBlame();
    }
}
