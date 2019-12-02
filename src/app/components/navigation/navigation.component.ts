import { Component } from '@angular/core';
import { GameEngineService } from 'src/app/services/game-engine.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
    constructor(
        private gameService: GameEngineService,
    ) {}

    public refreshGame() {
        this.gameService.refreshGame();
    }

    public resetGame() {
        this.gameService.resetGame();
    }
}
