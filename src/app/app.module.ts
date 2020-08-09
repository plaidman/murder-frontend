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
import { ExpertComponent } from './components/game/expert/expert.component';
import { ExplainComponent } from './components/game/explain/explain.component';
import { GameComponent } from './components/game/game.component';
import { GameNotesComponent } from './components/game/notes/notes.component';
import { PassBlameComponent } from './components/game/pass-blame/pass-blame.component';
import { PeekComponent } from './components/game/peek/peek.component';
import { PlayerListComponent } from './components/game/player-list/player-list.component';
import { RebuttalComponent } from './components/game/rebuttal/rebuttal.component';
import { SelectedCardComponent } from './components/game/selected-card/selected-card.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WaitingComponent } from './components/waiting/waiting.component';
import { AppMaterialModule } from './modules/app-material.module';
import { AppRoutingModule } from './modules/app-routing.module';
import { JeanetteComponent } from './jeanette/jeanette.component';

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
        PassBlameComponent,
        ExplainComponent,
        PeekComponent,
        ExpertComponent,
        JeanetteComponent,
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
