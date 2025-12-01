import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolingComponent } from './consoling.component';

describe('ConsolingComponent', () => {
  let component: ConsolingComponent;
  let fixture: ComponentFixture<ConsolingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsolingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
