import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusPannelComponent } from './focus-pannel.component';

describe('FocusPannelComponent', () => {
  let component: FocusPannelComponent;
  let fixture: ComponentFixture<FocusPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FocusPannelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FocusPannelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
