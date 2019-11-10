import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from 'src/app/modules/app-material.module';
import { NotesComponent } from './notes.component';

describe('NotesComponent', () => {
    let component: NotesComponent;
    let fixture: ComponentFixture<NotesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NotesComponent,
            ],
            imports: [
                AppMaterialModule,
                BrowserAnimationsModule,
                ReactiveFormsModule,
            ]
        })
    .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NotesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
