import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character.component';
import { AccuseComponent } from './components/game/accuse/accuse.component';
import { CollectComponent } from './components/game/collect/collect.component';
import { EvidenceCardComponent } from './components/game/evidence-card/evidence-card.component';
import { GameComponent } from './components/game/game.component';
import { GameNotesComponent } from './components/game/notes/notes.component';
import { PlayerListComponent } from './components/game/player-list/player-list.component';
import { RebuttalComponent } from './components/game/rebuttal/rebuttal.component';
import { SelectedCardComponent } from './components/game/selected-card/selected-card.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WaitingComponent } from './components/waiting/waiting.component';
import { AppMaterialModule } from './modules/app-material.module';
import { AppRoutingModule } from './modules/app-routing.module';

const socketConfig: SocketIoConfig = {
    url: 'http://localhost:8033',
};

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        CharacterComponent,
        GameComponent,
        WaitingComponent,
        MessagesComponent,
        PlayerListComponent,
        GameNotesComponent,
        SelectedCardComponent,
        EvidenceCardComponent,
        CollectComponent,
        AccuseComponent,
        RebuttalComponent,
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