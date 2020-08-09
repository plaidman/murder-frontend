import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeanetteComponent } from './jeanette.component';

describe('JeanetteComponent', () => {
  let component: JeanetteComponent;
  let fixture: ComponentFixture<JeanetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeanetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeanetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
