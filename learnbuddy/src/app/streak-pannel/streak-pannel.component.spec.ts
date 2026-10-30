import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreakPannelComponent } from './streak-pannel.component';

describe('StreakPannelComponent', () => {
  let component: StreakPannelComponent;
  let fixture: ComponentFixture<StreakPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreakPannelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StreakPannelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
