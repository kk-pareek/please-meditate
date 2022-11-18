import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenDaysChallengeComponent } from './ten-days-challenge.component';

describe('TenDaysChallengeComponent', () => {
  let component: TenDaysChallengeComponent;
  let fixture: ComponentFixture<TenDaysChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenDaysChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenDaysChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
