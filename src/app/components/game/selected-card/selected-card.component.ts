import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameEngineService } from 'src/app/services/game-engine.service';
import { Card, Game } from 'src/app/services/gameModels';
import { hiddenCard } from 'src/app/services/hiddenCard';

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
    public accusationCard: Card;

    constructor(
        private gameService: GameEngineService,
    ) {}

    @Input() set game(game: Game) {
        this.processedGame = game;

        const accuserId = game.accuserIds[this.game.currentAccuser];
        const accuserCards = game.players[accuserId].handCards;
        this.accusationCard = accuserCards[accuserCards.length - 1];
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
        // todo clean up testing
        // this.displayedCard = card;
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
        this.gameService.startExplanation({ cardId: this.selectedCard.id });
    }

    public displaySelect(): boolean {
        if (this.game.state !== 'passBlame') {
            return false;
        }

        if (this.playerId !== this.game.accuseeId) {
            return false;
        }

        if (this.card.isConclusive === true) {
            return false;
        }

        if (this.card.id === this.accusationCard.id) {
            return false;
        }

        return true;
    }
}
