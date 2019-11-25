import { Component, Input, OnChanges } from '@angular/core';
import { Card, Game } from 'src/app/services/gameModels';

@Component({
    selector: 'app-explain',
    templateUrl: './explain.component.html',
    styleUrls: ['./explain.component.scss']
})
export class ExplainComponent implements OnChanges {
    @Input() public game: Game;
    @Input() public playerId: string;
    public accusationCard: Card;

    public ngOnChanges() {
        const accuserId = this.game.accuserIds[this.game.currentAccuser];
        const accuserCards = this.game.players[accuserId].handCards;
        this.accusationCard = accuserCards[accuserCards.length - 1];
    }
}
