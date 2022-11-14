import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditationFaqsComponent } from './meditation-faqs.component';

describe('MeditationFaqsComponent', () => {
  let component: MeditationFaqsComponent;
  let fixture: ComponentFixture<MeditationFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeditationFaqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditationFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
