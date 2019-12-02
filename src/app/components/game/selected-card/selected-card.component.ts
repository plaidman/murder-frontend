import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameEngineService } from 'src/app/services/game-engine.service';
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
    public selectedCard: Card;
    public processedGame: Game;
    public displayedCard: Card;
    public isCardVisible: boolean;

    constructor(
        private gameService: GameEngineService,
    ) {}

    @Input() set game(game: Game) {
        this.processedGame = game;
    }

    get game() {
        return this.processedGame;
    }

    @Input() set card(card: Card) {
        this.selectedCard = card;

        if (card === undefined) {
            this.displayedCard = undefined;
            return;
        }

        const player = this.game.players[this.playerId];

        this.isCardVisible = false;
        this.displayedCard = hiddenCard;
        if (player.handCards.includes(card) || card.isConclusive) {
            this.isCardVisible = true;
            this.displayedCard = card;
        }
    }

    get card() {
        return this.displayedCard;
    }

    public dismiss() {
        this.dismissEvent.emit();
    }

    public passBlame() {
        this.gameService.explainTheEvidence({ cardId: this.selectedCard.id });
    }
}
