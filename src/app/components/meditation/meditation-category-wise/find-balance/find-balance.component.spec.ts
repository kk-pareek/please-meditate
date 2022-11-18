import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBalanceComponent } from './find-balance.component';

describe('FindBalanceComponent', () => {
  let component: FindBalanceComponent;
  let fixture: ComponentFixture<FindBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
