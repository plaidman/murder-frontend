import { Component, Input, OnChanges } from '@angular/core';
import { GameEngineService } from 'src/app/services/game-engine.service';
import { Card, Game } from 'src/app/services/gameModels';

@Component({
    selector: 'app-accuse',
    templateUrl: './accuse.component.html',
    styleUrls: ['./accuse.component.scss']
})
export class AccuseComponent implements OnChanges {
    @Input() public game: Game;
    @Input() public playerId: string;
    public accusationCard: Card;
    public accusorId: string;

    constructor(
        private gameService: GameEngineService,
    ) {}

    public ngOnChanges() {
        this.accusorId = this.game.accusorIds[this.game.currentAccusor];
        const accusorCards = this.game.players[this.accusorId].handCards;
        this.accusationCard = accusorCards[accusorCards.length - 1];
    }

    public startRebuttal() {
        this.gameService.startRebuttal();
    }
}
