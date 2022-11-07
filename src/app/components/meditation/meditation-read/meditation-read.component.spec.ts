import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditationReadComponent } from './meditation-read.component';

describe('MeditationReadComponent', () => {
  let component: MeditationReadComponent;
  let fixture: ComponentFixture<MeditationReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeditationReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditationReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
