import { Component, Input } from '@angular/core';
import { Game } from 'src/app/services/gameModels';

@Component({
    selector: 'app-game-collect-accuse',
    templateUrl: './game-collect-accuse.component.html',
    styleUrls: ['./game-collect-accuse.component.scss']
})
export class GameCollectAccuseComponent {
    @Input() public game: Game;
}
