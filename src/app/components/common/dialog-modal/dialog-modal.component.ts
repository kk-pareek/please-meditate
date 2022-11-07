import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent implements OnInit, AfterViewInit {
  videoUrl!: SafeResourceUrl;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public domSanitizer: DomSanitizer) { }


  ngOnInit(): void {
    this.setCurrentVideoUrl();
  }

  ngAfterViewInit(): void {
    this.unmuteVideo();
  }

  setCurrentVideoUrl() {
    const tempUrl = this.data.videoUrl.split('watch?v=');
    const videoUrl = tempUrl[0] + 'embed/' + tempUrl[1];
    this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  unmuteVideo() {
    // setTimeout(() => {
    //   let element: HTMLElement = document.getElementsByClassName('ytp-mute-button')[0] as HTMLElement;
    //   element.click();
    // }, 5000);
  }

}
