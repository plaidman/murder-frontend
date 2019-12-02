import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameEngineService } from 'src/app/services/game-engine.service';
import { Game, GameState } from 'src/app/services/gameModels';
import { GameUpdated } from 'src/app/services/socketModels';

@Component({
    selector: 'app-waiting',
    templateUrl: './waiting.component.html',
    styleUrls: ['./waiting.component.scss']
})
export class WaitingComponent implements OnInit, OnDestroy {
    private game: Game;
    private subscription: Subscription;
    private playerId: string;
    public submitEnabled: boolean;

    constructor(
        private gameEngine: GameEngineService,
        private router: Router,
    ) {}

    public ngOnInit() {
        this.submitEnabled = true;

        if (this.subscription === undefined) {
            const observable = this.gameEngine.getGameUpdatedObservable();
            this.subscription = observable.subscribe(this.updateGame.bind(this));
        }

        this.gameEngine.refreshGame();
    }

    public ngOnDestroy() {
        this.submitEnabled = true;
        this.subscription.unsubscribe();
        this.subscription = undefined;
    }

    public startGame() {
        this.submitEnabled = false;
        this.gameEngine.startGame(this.playerId);
    }

    private updateGame(gameUpdatedData: GameUpdated): void {
        this.playerId = localStorage.getItem('playerId');
        this.game = gameUpdatedData.game;

        if (!Object.keys(this.game.players).includes(this.playerId)) {
            this.router.navigateByUrl('character');
        }

        if (this.game.state === GameState.SHUFFLE) {
            this.submitEnabled = false;
        }

        if (![GameState.GATHER, GameState.SHUFFLE].includes(this.game.state)) {
            this.router.navigateByUrl('game');
        }

        console.log('game update', this.game);
    }
}
