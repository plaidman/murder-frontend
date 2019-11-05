import { Component } from '@angular/core';
import { GameEngineService } from 'src/app/services/game-engine.service';

@Component({
    selector: 'app-player-setup',
    templateUrl: './player-setup.component.html',
    styleUrls: ['./player-setup.component.scss']
})
export class PlayerSetupComponent {
    constructor(
        private gameEngine: GameEngineService,
    ) { }
}
