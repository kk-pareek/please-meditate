import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditationCategoryWiseComponent } from './meditation-category-wise.component';

describe('MeditationCategoryWiseComponent', () => {
  let component: MeditationCategoryWiseComponent;
  let fixture: ComponentFixture<MeditationCategoryWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeditationCategoryWiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditationCategoryWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
