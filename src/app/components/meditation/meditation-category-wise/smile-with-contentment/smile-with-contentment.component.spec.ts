import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileWithContentmentComponent } from './smile-with-contentment.component';

describe('SmileWithContentmentComponent', () => {
  let component: SmileWithContentmentComponent;
  let fixture: ComponentFixture<SmileWithContentmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmileWithContentmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmileWithContentmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
