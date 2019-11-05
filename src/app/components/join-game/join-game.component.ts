import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameEngineService, GameJoinedData } from 'src/app/services/game-engine.service';
import { Nullable } from 'src/models';

@Component({
    selector: 'app-join-game',
    templateUrl: './join-game.component.html',
    styleUrls: ['./join-game.component.scss'],
})
export class JoinGameComponent {
    private form: FormGroup;
    private subscription: Subscription;

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private gameEngine: GameEngineService,
    ) {
        this.form = formBuilder.group({
            gameId: '',
        });
    }

    public onSubmit(): void {
        let gameId: Nullable<string> = this.form.value.gameId;
        if (gameId === '') {
            gameId = null;
        }

        this.subscription = this.gameEngine.gameJoinedObservable()
            .subscribe(this.gameJoined.bind(this));
        this.gameEngine.joinGame(this.form.value.gameId);
    }

    private gameJoined(gameJoinedData: GameJoinedData): void {
        localStorage.setItem('playerId', gameJoinedData.playerId);
        localStorage.setItem('gameId', gameJoinedData.gameId);
        localStorage.setItem('game', JSON.stringify(gameJoinedData.game));

        this.subscription.unsubscribe();
        this.router.navigateByUrl('/character');
    }
}
