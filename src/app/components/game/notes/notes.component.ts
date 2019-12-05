import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class GameNotesComponent {
    public notes: FormControl;

    constructor(
        formBuilder: FormBuilder,
    ) {
        this.notes = formBuilder.control(localStorage.getItem('notes'));
    }

    public input() {
        localStorage.setItem('notes', this.notes.value);
    }
}
