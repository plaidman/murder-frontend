import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
    selector: 'app-game-notes',
    templateUrl: './game-notes.component.html',
    styleUrls: ['./game-notes.component.scss']
})
export class GameNotesComponent {
    public notes: FormControl;
    public saveTimeout: NodeJS.Timer;

    constructor(
        formBuilder: FormBuilder,
    ) {
        this.notes = formBuilder.control('');
    }

    public input() {
        clearTimeout(this.saveTimeout);
        this.saveTimeout = setTimeout(() => {
            console.log(this.notes.value);
            localStorage.setItem('notes', this.notes.value);
        }, 500);
    }
}
