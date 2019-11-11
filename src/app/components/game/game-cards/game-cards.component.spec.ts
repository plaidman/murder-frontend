import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from 'src/app/modules/app-material.module';
import { GameCardsComponent } from './game-cards.component';

describe('CardsComponent', () => {
    let component: GameCardsComponent;
    let fixture: ComponentFixture<GameCardsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                GameCardsComponent,
            ],
            imports: [
                AppMaterialModule,
            ]
        })
    .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GameCardsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
