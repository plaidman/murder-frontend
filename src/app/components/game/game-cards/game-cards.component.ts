import { Component, Input } from '@angular/core';
import { Player } from 'src/app/services/gameModels';

@Component({
    selector: 'app-game-cards',
    templateUrl: './game-cards.component.html',
    styleUrls: ['./game-cards.component.scss']
})
export class GameCardsComponent {
    @Input() playerId: string;
    @Input() players: Record<string, Player>;
}
