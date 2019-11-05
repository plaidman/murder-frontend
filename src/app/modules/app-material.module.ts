import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    exports: [
        MatInputModule,
        MatToolbarModule,
        MatButtonModule,
    ],
    imports: [
        MatInputModule,
        MatToolbarModule,
        MatButtonModule,
    ],
})
export class AppMaterialModule { }
