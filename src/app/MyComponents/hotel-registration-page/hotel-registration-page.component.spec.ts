import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRegistrationPageComponent } from './hotel-registration-page.component';

describe('HotelRegistrationPageComponent', () => {
  let component: HotelRegistrationPageComponent;
  let fixture: ComponentFixture<HotelRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelRegistrationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
