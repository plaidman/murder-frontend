import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SocketIoModule } from 'ngx-socket-io';
import { AppMaterialModule } from 'src/app/modules/app-material.module';
import { AppRoutingModule } from 'src/app/modules/app-routing.module';
import { CharacterComponent } from '../character/character.component';
import { WaitingComponent } from '../waiting/waiting.component';
import { GameComponent } from './game.component';

describe('GameComponent', () => {
    let component: GameComponent;
    let fixture: ComponentFixture<GameComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                GameComponent,
                CharacterComponent,
                WaitingComponent,
            ],
            imports: [
                AppMaterialModule,
                AppRoutingModule,
                ReactiveFormsModule,
                SocketIoModule.forRoot({ url: '' }),
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
