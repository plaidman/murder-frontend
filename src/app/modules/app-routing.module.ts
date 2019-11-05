import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinGameComponent } from '../components/join-game/join-game.component';
import { PlayerSetupComponent } from '../components/player-setup/player-setup.component';

const routes: Routes = [
    { path: 'game', component: JoinGameComponent },
    { path: 'character', component: PlayerSetupComponent },
    { path: '**', redirectTo: 'game' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
