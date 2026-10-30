import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayPannelComponent } from './today-pannel.component';

describe('TodayPannelComponent', () => {
  let component: TodayPannelComponent;
  let fixture: ComponentFixture<TodayPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayPannelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodayPannelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
