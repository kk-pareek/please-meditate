import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealWithMusicComponent } from './heal-with-music.component';

describe('HealWithMusicComponent', () => {
  let component: HealWithMusicComponent;
  let fixture: ComponentFixture<HealWithMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealWithMusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealWithMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
