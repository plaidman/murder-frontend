import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    exports: [
        MatButtonModule,
        MatDividerModule,
        MatInputModule,
        MatToolbarModule,
    ],
    imports: [
        MatButtonModule,
        MatDividerModule,
        MatInputModule,
        MatToolbarModule,
    ],
})
export class AppMaterialModule { }
