import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolupComponent } from './poolup.component';

describe('PoolupComponent', () => {
  let component: PoolupComponent;
  let fixture: ComponentFixture<PoolupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoolupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoolupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
