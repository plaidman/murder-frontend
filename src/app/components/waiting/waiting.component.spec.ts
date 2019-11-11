import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SocketIoModule } from 'ngx-socket-io';
import { AppMaterialModule } from 'src/app/modules/app-material.module';
import { AppRoutingModule } from 'src/app/modules/app-routing.module';
import { CharacterComponent } from '../character/character.component';
import { GameCardsComponent } from '../game/game-cards/game-cards.component';
import { GameNotesComponent } from '../game/game-notes/game-notes.component';
import { GameComponent } from '../game/game.component';
import { MessagesComponent } from '../messages/messages.component';
import { WaitingComponent } from './waiting.component';

describe('WaitingComponent', () => {
    let component: WaitingComponent;
    let fixture: ComponentFixture<WaitingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                WaitingComponent,
                CharacterComponent,
                MessagesComponent,
                GameComponent,
                GameCardsComponent,
                GameNotesComponent,
            ],
            imports: [
                AppMaterialModule,
                AppRoutingModule,
                ReactiveFormsModule,
                SocketIoModule.forRoot({ url: '' }),
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WaitingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
