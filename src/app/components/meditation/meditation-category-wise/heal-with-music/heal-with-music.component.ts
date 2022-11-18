import { Component, OnInit } from '@angular/core';
import { MeditationService } from '../../meditation.service';

@Component({
  selector: 'app-heal-with-music',
  templateUrl: './heal-with-music.component.html',
  styleUrls: ['./heal-with-music.component.css']
})
export class HealWithMusicComponent implements OnInit {

  constructor(private meditationService: MeditationService) { 
    this.meditationService.pageTitleSubject.next('Heal With Music');
  }

  ngOnInit(): void {
  }

}
