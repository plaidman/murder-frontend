import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCollectAccuseComponent } from './game-collect-accuse.component';

describe('GameCollectAccuseComponent', () => {
    let component: GameCollectAccuseComponent;
    let fixture: ComponentFixture<GameCollectAccuseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ GameCollectAccuseComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GameCollectAccuseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
