import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-video-card-tile',
  templateUrl: './video-card-tile.component.html',
  styleUrls: ['./video-card-tile.component.css']
})
export class VideoCardTileComponent implements OnInit {
  @Input() videoUrl: any;
  @Input() videoDuration: any;
  @Input() videoLanguage: any;
  videoTitle!: any;
  videoThumbnail!: any;


  constructor(private dialog: MatDialog, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.fetchVideoDetails();
    this.fetchVideoThumbnail();
  }

  fetchVideoDetails() {
    const requestUrl = `http://www.youtube.com/oembed?url=${this.videoUrl}&format=json`;
    this.httpClient.get<any>(requestUrl).subscribe((response) => {
      this.videoTitle = response.title.split('  ')[0];
      this.videoTitle = this.videoTitle.split(' | ')[0];
      this.videoTitle = this.videoTitle.split(' - ')[0];
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
        videoUrl: this.videoUrl
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result)
      } else {
      }
    })
  }
}
