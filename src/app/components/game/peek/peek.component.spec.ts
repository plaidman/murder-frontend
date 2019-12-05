import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PeekComponent } from './peek.component';

describe('PeekComponent', () => {
    let component: PeekComponent;
    let fixture: ComponentFixture<PeekComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PeekComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PeekComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
