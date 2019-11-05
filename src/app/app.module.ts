import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { AppComponent } from './app.component';
import { JoinGameComponent } from './components/join-game/join-game.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlayerSetupComponent } from './components/player-setup/player-setup.component';
import { AppMaterialModule } from './modules/app-material.module';
import { AppRoutingModule } from './modules/app-routing.module';

const socketConfig: SocketIoConfig = {
    url: 'http://localhost:8033',
    options: {
        query: {
            playerId: localStorage.getItem('playerId'),
            gameId: localStorage.getItem('gameId'),
        }
    }
};

@NgModule({
    declarations: [
        AppComponent,
        JoinGameComponent,
        NavigationComponent,
        PlayerSetupComponent,
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
export class AppModule { }
