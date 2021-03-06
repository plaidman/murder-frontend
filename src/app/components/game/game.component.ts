import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { findCardById } from 'src/app/services/findCardById';
import { GameEngineService } from 'src/app/services/game-engine.service';
import { Card, Game, GameState } from 'src/app/services/gameModels';
import { GameUpdated } from 'src/app/services/socketModels';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
    private game: Game;
    private subscription: Subscription;
    public playerId: string;
    public selectedCard: Card;

    constructor(
        private router: Router,
        private gameEngine: GameEngineService,
    ) {}

    public ngOnInit() {
        if (this.subscription === undefined) {
            const observable = this.gameEngine.getGameUpdatedObservable();
            this.subscription = observable.subscribe(this.updateGame.bind(this));
        }

        this.gameEngine.refreshGame();
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscription = undefined;
    }

    private updateGame(gameUpdatedData: GameUpdated): void {
        this.playerId = localStorage.getItem('playerId');
        this.game = gameUpdatedData.game;

        if ([GameState.GATHER, GameState.SHUFFLE].includes(this.game.state)) {
            this.router.navigateByUrl('character');
        }

        if (this.selectedCard) {
            this.selectedCard = findCardById(this.game, this.selectedCard.id, false);
        }

        console.log('game update', this.game);
    }

    public selectCard(card: Card) {
        if (this.selectedCard === card) {
            this.selectedCard = undefined;
            return;
        }

        this.selectedCard = card;
    }

    public dismissSelectedCard() {
        this.selectedCard = undefined;
    }
}
