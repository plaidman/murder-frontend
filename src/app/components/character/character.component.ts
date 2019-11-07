import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameEngineService } from 'src/app/services/game-engine.service';
import { PlayerAdded } from 'src/app/services/socketModels';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
    private form: FormGroup;
    private subscription: Subscription;

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private gameEngine: GameEngineService,
    ) {
        this.form = formBuilder.group({
            name: 'name',
            expertise: 'exp',
            weapons: formBuilder.array([
                formBuilder.control('w1'),
                formBuilder.control('w2'),
            ]),
            evidence: formBuilder.array([
                formBuilder.control('e1'),
                formBuilder.control('e2'),
                formBuilder.control('e3'),
                formBuilder.control('e4'),
            ])
        });
    }

    public onSubmit(): void {
        this.subscription = this.gameEngine.setupPlayer(
            this.form.value,
            this.playerAdded.bind(this),
        );
    }

    private playerAdded(playerAddedData: PlayerAdded): void {
        localStorage.setItem('playerId', playerAddedData.playerId);
        // todo save form data to local storage, then prepop with whatever they entered for next game
        // todo maybe offer a couple prebuilt characters

        this.subscription.unsubscribe();
        this.router.navigateByUrl('waiting');
    }
}
