import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from 'src/app/modules/app-material.module';
import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
    let component: NavigationComponent;
    let fixture: ComponentFixture<NavigationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NavigationComponent,
            ],
            imports: [
                AppMaterialModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
