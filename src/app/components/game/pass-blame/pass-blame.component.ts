import { Component, Input, OnChanges } from '@angular/core';
import { Card, Game } from 'src/app/services/gameModels';

@Component({
    selector: 'app-pass-blame',
    templateUrl: './pass-blame.component.html',
    styleUrls: ['./pass-blame.component.scss']
})
export class PassBlameComponent implements OnChanges {
    @Input() public game: Game;
    @Input() public playerId: string;
    public accusationCard: Card;

    public ngOnChanges() {
        const accusorId = this.game.accusorIds[this.game.currentAccusor];
        const accusorCards = this.game.players[accusorId].handCards;
        this.accusationCard = accusorCards[accusorCards.length - 1];
    }
}
