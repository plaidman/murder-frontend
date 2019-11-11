import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character.component';
import { GameCardsComponent } from './components/game/game-cards/game-cards.component';
import { GameNotesComponent } from './components/game/game-notes/game-notes.component';
import { GameComponent } from './components/game/game.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WaitingComponent } from './components/waiting/waiting.component';
import { AppMaterialModule } from './modules/app-material.module';
import { AppRoutingModule } from './modules/app-routing.module';

const socketConfig: SocketIoConfig = {
    url: 'http://localhost:8033',
    options: {
        query: {
            playerId: localStorage.getItem('playerId'),
        }
    }
};

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        CharacterComponent,
        GameComponent,
        WaitingComponent,
        MessagesComponent,
        GameCardsComponent,
        GameNotesComponent,
    ],
    imports: [
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        SocketIoModule.forRoot(socketConfig),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
