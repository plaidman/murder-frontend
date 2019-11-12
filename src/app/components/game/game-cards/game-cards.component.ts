import { Component, Input } from '@angular/core';
import { Card, Player } from 'src/app/services/gameModels';

@Component({
    selector: 'app-game-cards',
    templateUrl: './game-cards.component.html',
    styleUrls: ['./game-cards.component.scss']
})
export class GameCardsComponent {
    @Input() public playerId: string;
    @Input() public players: Record<string, Player>;
    public selectedCard: Card;

    // todo make visible if card is conclusive evidence

    public selectCard(card: Card) {
        const yourCards = this.players[this.playerId].handCards;
        console.log('click');

        if (!yourCards.includes(card)) {
            return;
        }

        console.log(card);
        this.selectedCard = card;
    }
}
