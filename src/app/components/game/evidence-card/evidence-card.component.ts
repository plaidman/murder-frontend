import { Component, Input } from '@angular/core';
import { Card } from 'src/app/services/gameModels';

@Component({
    selector: 'app-evidence-card',
    templateUrl: './evidence-card.component.html',
    styleUrls: ['./evidence-card.component.scss']
})
export class EvidenceCardComponent {
    @Input() public card: Card;
}
