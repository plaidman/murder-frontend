import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlayerSetupComponent } from './components/player-setup/player-setup.component';
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
export class AppModule {
    // todo
    //   landing page to decide if we rejoin an existing game when we load the app
    //   waiting page to list all the players with a button to start the game
}
