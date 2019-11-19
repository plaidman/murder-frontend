import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PassBlameComponent } from './pass-blame.component';

describe('PassBlameComponent', () => {
    let component: PassBlameComponent;
    let fixture: ComponentFixture<PassBlameComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PassBlameComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PassBlameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
