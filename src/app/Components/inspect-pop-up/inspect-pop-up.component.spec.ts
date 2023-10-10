import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectPopUpComponent } from './inspect-pop-up.component';

describe('InspectPopUpComponent', () => {
  let component: InspectPopUpComponent;
  let fixture: ComponentFixture<InspectPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
