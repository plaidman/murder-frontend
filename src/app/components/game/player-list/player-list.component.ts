import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card, Game } from 'src/app/services/gameModels';

@Component({
    selector: 'app-player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent {
    @Input() public game: Game;
    @Input() public playerId: string;
    @Input() public selectedCard: Card;
    @Output() public selectedCardEvent = new EventEmitter<Card>();

    public selectCard(card: Card): void {
        this.selectedCardEvent.emit(card);
    }

    public isVisible(card: Card): boolean {
        const player = this.game.players[this.playerId];
        if (player === undefined) {
            return false;
        }

        if (player.handCards.includes(card)) {
            return true;
        }

        return card.isConclusive;
    }

    public isSelected(card: Card) {
        if (this.selectedCard === undefined) {
            return false;
        }

        return card.id === this.selectedCard.id;
    }
}
