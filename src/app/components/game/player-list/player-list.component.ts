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

    // todo make visible if card is conclusive evidence

    public selectCard(card: Card): void {
        this.selectedCardEvent.emit(card);
    }

    public isVisible(card: Card): boolean {
        if (this.game.players[this.playerId].handCards.includes(card)) {
            return true;
        }

        return card.isConclusive;
    }
}
