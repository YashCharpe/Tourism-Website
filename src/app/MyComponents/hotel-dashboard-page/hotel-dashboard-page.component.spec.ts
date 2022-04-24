import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDashboardPageComponent } from './hotel-dashboard-page.component';

describe('HotelDashboardPageComponent', () => {
  let component: HotelDashboardPageComponent;
  let fixture: ComponentFixture<HotelDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelDashboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
