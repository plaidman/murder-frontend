import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from 'src/app/modules/app-material.module';
import { PlayerListComponent } from './player-list.component';

describe('PlayerListComponent', () => {
    let component: PlayerListComponent;
    let fixture: ComponentFixture<PlayerListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PlayerListComponent,
            ],
            imports: [
                AppMaterialModule,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
