import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonRegistrationPageComponent } from './common-registration-page.component';

describe('CommonRegistrationPageComponent', () => {
  let component: CommonRegistrationPageComponent;
  let fixture: ComponentFixture<CommonRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonRegistrationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
