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
        const accuserId = this.game.accuserIds[this.game.currentAccuser];
        const accuserCards = this.game.players[accuserId].handCards;
        this.accusationCard = accuserCards[accuserCards.length - 1];
    }
}
