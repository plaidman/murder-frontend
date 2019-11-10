import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character.component';
import { CardsComponent } from './components/game/cards/cards.component';
import { GameComponent } from './components/game/game.component';
import { NotesComponent } from './components/game/notes/notes.component';
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
        CardsComponent,
        NotesComponent,
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
