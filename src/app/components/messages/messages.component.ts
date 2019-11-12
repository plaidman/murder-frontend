import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
    @Input() public messages: string[];

    // todo flash or scroll when a new message happens
}
