import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleManagementComponent } from './console-management.component';

describe('ConsoleManagementComponent', () => {
  let component: ConsoleManagementComponent;
  let fixture: ComponentFixture<ConsoleManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsoleManagementComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ConsoleManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
