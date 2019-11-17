import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameEngineService } from 'src/app/services/game-engine.service';
import { GameState } from 'src/app/services/gameModels';
import { GameUpdated, PlayerAdded, SetupPlayer } from 'src/app/services/socketModels';

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
        //   offer some prebuilt characters

        const character: SetupPlayer = this.unpackCharacter();

        this.form = this.formBuilder.group({
            name: character.name,
            expertise: character.expertise,
            weapons: this.formBuilder.array([
                this.formBuilder.control(character.weapons[0]),
                this.formBuilder.control(character.weapons[1]),
            ]),
            evidence: this.formBuilder.array([
                this.formBuilder.control(character.evidence[0]),
                this.formBuilder.control(character.evidence[1]),
                this.formBuilder.control(character.evidence[2]),
                this.formBuilder.control(character.evidence[3]),
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
        localStorage.setItem('character', JSON.stringify(this.form.value));

        this.addSub = this.gameEngine.setupPlayer(
            this.form.value,
            this.playerAdded.bind(this),
        );
    }

    private playerAdded(playerAddedData: PlayerAdded): void {
        localStorage.setItem('playerId', playerAddedData.playerId);
        this.router.navigateByUrl('waiting');
    }

    private unpackCharacter(): SetupPlayer {
        const encodedChar = localStorage.getItem('character');

        if (encodedChar === null) {
            return {
                name: '',
                expertise: '',
                evidence: ['', '', '', ''],
                weapons: ['', ''],
            };
        }

        return JSON.parse(encodedChar);
    }
}
