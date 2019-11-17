import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocketIoModule } from 'ngx-socket-io';
import { AppMaterialModule } from 'src/app/modules/app-material.module';
import { AppRoutingModule } from 'src/app/modules/app-routing.module';
import { GameComponent } from '../game/game.component';
import { GameNotesComponent } from '../game/notes/notes.component';
import { PlayerListComponent } from '../game/player-list/player-list.component';
import { MessagesComponent } from '../messages/messages.component';
import { WaitingComponent } from '../waiting/waiting.component';
import { CharacterComponent } from './character.component';

describe('CharacterComponent', () => {
    let component: CharacterComponent;
    let fixture: ComponentFixture<CharacterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CharacterComponent,
                WaitingComponent,
                GameComponent,
                MessagesComponent,
                PlayerListComponent,
                GameNotesComponent,
            ],
            imports: [
                BrowserAnimationsModule,
                SocketIoModule.forRoot({url: ''}),
                AppRoutingModule,
                AppMaterialModule,
                ReactiveFormsModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CharacterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
