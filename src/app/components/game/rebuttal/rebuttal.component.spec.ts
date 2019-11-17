import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RebuttalComponent } from './rebuttal.component';

describe('RebuttalComponent', () => {
    let component: RebuttalComponent;
    let fixture: ComponentFixture<RebuttalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RebuttalComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RebuttalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
