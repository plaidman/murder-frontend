import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameEngineService } from 'src/app/services/game-engine.service';
import { Game } from 'src/app/services/gameModels';
import { GameUpdated } from 'src/app/services/socketModels';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
    public game: Game;
    private subscription: Subscription;

    constructor(
        private gameEngine: GameEngineService,
    ) {}

    public ngOnInit() {
        const observable = this.gameEngine.getGameUpdatedObservable();
        this.subscription = observable.subscribe(this.updateGame.bind(this));
        this.gameEngine.initGame();
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private updateGame(gameUpdatedData: GameUpdated): void {
        this.game = gameUpdatedData.game;
        console.log('game update', this.game);
    }
}
