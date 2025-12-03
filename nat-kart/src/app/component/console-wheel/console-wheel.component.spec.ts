import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleWheelComponent } from './console-wheel.component';

describe('ConsoleWheelComponent', () => {
  let component: ConsoleWheelComponent;
  let fixture: ComponentFixture<ConsoleWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsoleWheelComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ConsoleWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
