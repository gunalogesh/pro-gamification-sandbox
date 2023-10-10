import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPopupComponent } from './initial-popup.component';

describe('InitialPopupComponent', () => {
  let component: InitialPopupComponent;
  let fixture: ComponentFixture<InitialPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
