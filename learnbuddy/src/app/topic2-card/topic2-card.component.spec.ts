import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic2CardComponent } from './topic2-card.component';

describe('Topic2CardComponent', () => {
  let component: Topic2CardComponent;
  let fixture: ComponentFixture<Topic2CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topic2CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Topic2CardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
