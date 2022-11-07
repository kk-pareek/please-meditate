import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditationPracticeComponent } from './meditation-practice.component';

describe('MeditationPracticeComponent', () => {
  let component: MeditationPracticeComponent;
  let fixture: ComponentFixture<MeditationPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeditationPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditationPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
