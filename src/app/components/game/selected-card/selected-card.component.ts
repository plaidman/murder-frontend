import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card, CardType, Player } from 'src/app/services/gameModels';

const hiddenCard: Card = {
    accuseeId: '',
    accuseeName: '',
    description: '<card not visible>',
    expertPlayerId: '',
    expertise: '',
    isConclusive: false,
    type: CardType.HIDDEN,
};

@Component({
    selector: 'app-selected-card',
    templateUrl: './selected-card.component.html',
    styleUrls: ['./selected-card.component.scss']
})
export class SelectedCardComponent {
    private processedCard: Card;
    @Input() public player: Player;
    public isCardVisible: boolean;
    @Output() public dismissEvent = new EventEmitter();

    @Input() set card(card: Card) {
        if (card === undefined) {
            this.processedCard = undefined;
            return;
        }

        this.isCardVisible = false;
        this.processedCard = hiddenCard;

        if (this.player.handCards.includes(card) || card.isConclusive) {
            this.isCardVisible = true;
            this.processedCard = card;
        }
    }

    get card() {
        return this.processedCard;
    }

    public dismiss() {
        this.dismissEvent.emit();
    }
}
