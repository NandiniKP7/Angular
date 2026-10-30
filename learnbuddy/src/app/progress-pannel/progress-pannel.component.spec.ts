import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressPannelComponent } from './progress-pannel.component';

describe('ProgressPannelComponent', () => {
  let component: ProgressPannelComponent;
  let fixture: ComponentFixture<ProgressPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressPannelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressPannelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
