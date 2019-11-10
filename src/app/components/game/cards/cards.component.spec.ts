import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from 'src/app/modules/app-material.module';
import { CardsComponent } from './cards.component';

describe('CardsComponent', () => {
    let component: CardsComponent;
    let fixture: ComponentFixture<CardsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CardsComponent,
            ],
            imports: [
                AppMaterialModule,
            ]
        })
    .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CardsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
