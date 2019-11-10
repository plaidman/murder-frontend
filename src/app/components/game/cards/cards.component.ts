import { Component, Input } from '@angular/core';
import { Player } from 'src/app/services/gameModels';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
    @Input() playerId: string;
    @Input() players: Record<string, Player>;
}
