import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogNidraComponent } from './yog-nidra.component';

describe('YogNidraComponent', () => {
  let component: YogNidraComponent;
  let fixture: ComponentFixture<YogNidraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YogNidraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YogNidraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
