import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from '../components/character/character.component';
import { GameComponent } from '../components/game/game.component';
import { WaitingComponent } from '../components/waiting/waiting.component';
import { JeanetteComponent } from '../jeanette/jeanette.component';

const routes: Routes = [
    { path: 'character', component: CharacterComponent },
    { path: 'waiting', component: WaitingComponent },
    { path: 'game', component: GameComponent },
    { path: 'jeanette', component: JeanetteComponent },
    { path: '**', redirectTo: 'jeanette' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
