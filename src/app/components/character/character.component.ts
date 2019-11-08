import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameEngineService } from 'src/app/services/game-engine.service';
import { GameState } from 'src/app/services/gameModels';
import { GameUpdated, PlayerAdded } from 'src/app/services/socketModels';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit, OnDestroy {
    private form: FormGroup;
    private updateSub: Subscription;
    private addSub: Subscription;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private gameEngine: GameEngineService,
    ) { }

    public ngOnInit() {
        // todo
        //   pull values from localstorage
        //   offer some prebuilt characters

        this.form = this.formBuilder.group({
            name: 'name',
            expertise: 'exp',
            weapons: this.formBuilder.array([
                this.formBuilder.control('w1'),
                this.formBuilder.control('w2'),
            ]),
            evidence: this.formBuilder.array([
                this.formBuilder.control('e1'),
                this.formBuilder.control('e2'),
                this.formBuilder.control('e3'),
                this.formBuilder.control('e4'),
            ])
        });

        if (this.updateSub === undefined) {
            const observable = this.gameEngine.getGameUpdatedObservable();
            this.updateSub = observable.subscribe(this.updateGame.bind(this));
        }

        this.gameEngine.requestGame();
    }

    public ngOnDestroy() {
        if (this.addSub !== undefined) {
            this.addSub.unsubscribe();
            this.addSub = undefined;
        }

        this.updateSub.unsubscribe();
        this.updateSub = undefined;
    }

    private updateGame(gameUpdatedData: GameUpdated): void {
        console.log('game update', gameUpdatedData.game);

        if (![GameState.GATHER, GameState.SHUFFLE].includes(gameUpdatedData.game.state)) {
            this.router.navigateByUrl('game');
        }
    }

    public onSubmit(): void {
        // todo save values to local storage
        this.addSub = this.gameEngine.setupPlayer(
            this.form.value,
            this.playerAdded.bind(this),
        );
    }

    private playerAdded(playerAddedData: PlayerAdded): void {
        localStorage.setItem('playerId', playerAddedData.playerId);
        this.router.navigateByUrl('waiting');
    }
}
