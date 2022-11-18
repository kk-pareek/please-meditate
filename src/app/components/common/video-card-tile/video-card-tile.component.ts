import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-video-card-tile',
  templateUrl: './video-card-tile.component.html',
  styleUrls: ['./video-card-tile.component.css'],
})
export class VideoCardTileComponent implements OnInit {
  @Input() videoUrl: any;
  @Input() videoDuration: any;
  @Input() videoLanguage: any;
  @Input() videoIndex: any;
  videoTitle!: any;
  videoThumbnail!: any;
  showLoader = false;

  constructor(
    private dialog: MatDialog,
    private httpClient: HttpClient,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.showLoader = true;
    this.fetchVideoDetails();
    this.fetchVideoThumbnail();
  }

  fetchVideoDetails() {
    const requestUrl = `https://www.youtube.com/oembed?url=${this.videoUrl}&format=json`;
    this.httpClient.get<any>(requestUrl).subscribe((response) => {
      this.videoTitle = response.title.split('  ')[0];
      // this.videoTitle = this.videoTitle.split(' | ')[0];
      // this.videoTitle = this.videoTitle.split(' - ')[0];
      if (this.videoTitle.toString().length > 42) {
        this.videoTitle = this.videoTitle.toString().substring(0, 41) + '...';
      }
      this.videoTitle = '' + (this.videoIndex+1) + '. ' + this.videoTitle;
      this.showLoader = false;
    });
  }

  fetchVideoThumbnail() {
    const urlCode = this.videoUrl.split('watch?v=')[1];
    this.videoThumbnail = `https://i.ytimg.com/vi/${urlCode}/sddefault.jpg`;
  }

  onPlay() {
    this.showVideoIframe();
  }

  showVideoIframe() {
    const dialogRef = this.dialog.open(DialogModalComponent, {
      data: {
        videoUrl: this.videoUrl,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
      } else {
      }
    });
  }
}
