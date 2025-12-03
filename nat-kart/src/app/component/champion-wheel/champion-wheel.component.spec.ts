import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionWheelComponent } from './champion-wheel.component';

describe('ChampionWheelComponent', () => {
  let component: ChampionWheelComponent;
  let fixture: ComponentFixture<ChampionWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionWheelComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChampionWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
