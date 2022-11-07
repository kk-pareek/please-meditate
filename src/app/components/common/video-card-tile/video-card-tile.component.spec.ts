import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCardTileComponent } from './video-card-tile.component';

describe('VideoCardTileComponent', () => {
  let component: VideoCardTileComponent;
  let fixture: ComponentFixture<VideoCardTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCardTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCardTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
