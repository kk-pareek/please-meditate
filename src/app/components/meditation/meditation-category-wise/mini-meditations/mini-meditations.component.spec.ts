import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniMeditationsComponent } from './mini-meditations.component';

describe('MiniMeditationsComponent', () => {
  let component: MiniMeditationsComponent;
  let fixture: ComponentFixture<MiniMeditationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniMeditationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniMeditationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
