import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    exports: [
        MatButtonModule,
        MatDialogModule,
        MatDividerModule,
        MatInputModule,
        MatListModule,
        MatToolbarModule,
    ],
    imports: [
        MatButtonModule,
        MatDialogModule,
        MatDividerModule,
        MatInputModule,
        MatListModule,
        MatToolbarModule,
    ],
})
export class AppMaterialModule { }
