import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameEngineService } from 'src/app/services/game-engine.service';
import { PlayerAdded } from 'src/app/services/socketModels';

@Component({
    selector: 'app-player-setup',
    templateUrl: './player-setup.component.html',
    styleUrls: ['./player-setup.component.scss']
})
export class PlayerSetupComponent {
    private form: FormGroup;
    private subscription: Subscription;

    constructor(
        formBuilder: FormBuilder,
        // private router: Router,
        private gameEngine: GameEngineService,
    ) {
        this.form = formBuilder.group({
            name: '',
            expertise: '',
            weapons: formBuilder.array([
                formBuilder.control(''),
                formBuilder.control(''),
            ]),
            evidence: formBuilder.array([
                formBuilder.control(''),
                formBuilder.control(''),
                formBuilder.control(''),
                formBuilder.control(''),
            ])
        });
    }

    public onSubmit(): void {
        this.subscription = this.gameEngine.setupPlayer(this.form.value, this.playerAdded.bind(this));
    }

    private playerAdded(playerAddedData: PlayerAdded): void {
        localStorage.setItem('playerId', playerAddedData.playerId);
        // do stuff here to pass along the game data from playerAddedData to the next component
        console.log(playerAddedData.game);

        this.subscription.unsubscribe();
        // this.router.navigateByUrl('game');
    }
}
