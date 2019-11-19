import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card, CardType, Game } from 'src/app/services/gameModels';

const hiddenCard: Card = {
    id: '',
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
    @Input() public playerId: string;
    @Output() public dismissEvent = new EventEmitter();
    public processedGame: Game;
    public processedCard: Card;
    public isCardVisible: boolean;

    @Input() set game(game: Game) {
        this.processedGame = game;
    }

    get game() {
        return this.processedGame;
    }

    @Input() set card(card: Card) {
        if (card === undefined) {
            this.processedCard = undefined;
            return;
        }

        const player = this.game.players[this.playerId];

        this.isCardVisible = false;
        this.processedCard = hiddenCard;
        if (player.handCards.includes(card) || card.isConclusive) {
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
