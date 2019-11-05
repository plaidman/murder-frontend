import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerSetupComponent } from '../components/player-setup/player-setup.component';

const routes: Routes = [
    { path: 'character', component: PlayerSetupComponent },
    // { path: 'waiting', component: PlayerSetupComponent },
    // { path: 'game', component: PlayerSetupComponent },
    { path: '**', redirectTo: 'character' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
