import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChantingMeditationComponent } from './chanting-meditation.component';

describe('ChantingMeditationComponent', () => {
  let component: ChantingMeditationComponent;
  let fixture: ComponentFixture<ChantingMeditationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChantingMeditationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChantingMeditationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
