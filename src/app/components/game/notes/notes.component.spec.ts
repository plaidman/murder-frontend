import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from 'src/app/modules/app-material.module';
import { GameNotesComponent } from './notes.component';

describe('NotesComponent', () => {
    let component: GameNotesComponent;
    let fixture: ComponentFixture<GameNotesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                GameNotesComponent,
            ],
            imports: [
                AppMaterialModule,
                BrowserAnimationsModule,
                ReactiveFormsModule,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GameNotesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
