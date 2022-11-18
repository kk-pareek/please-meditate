import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformingEmotionsComponent } from './transforming-emotions.component';

describe('TransformingEmotionsComponent', () => {
  let component: TransformingEmotionsComponent;
  let fixture: ComponentFixture<TransformingEmotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransformingEmotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformingEmotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
