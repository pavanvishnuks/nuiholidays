import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderHomeComponent } from './calender-home.component';

describe('CalenderHomeComponent', () => {
  let component: CalenderHomeComponent;
  let fixture: ComponentFixture<CalenderHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
