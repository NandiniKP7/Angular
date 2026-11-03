import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic3CardComponent } from './topic3-card.component';

describe('Topic3CardComponent', () => {
  let component: Topic3CardComponent;
  let fixture: ComponentFixture<Topic3CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topic3CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Topic3CardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
