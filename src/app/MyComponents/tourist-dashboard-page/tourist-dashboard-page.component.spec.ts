import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristDashboardPageComponent } from './tourist-dashboard-page.component';

describe('TouristDashboardPageComponent', () => {
  let component: TouristDashboardPageComponent;
  let fixture: ComponentFixture<TouristDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouristDashboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
