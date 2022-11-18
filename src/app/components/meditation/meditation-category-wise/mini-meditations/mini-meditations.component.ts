import { Component, OnInit } from '@angular/core';
import { MeditationService } from '../../meditation.service';

@Component({
  selector: 'app-mini-meditations',
  templateUrl: './mini-meditations.component.html',
  styleUrls: ['./mini-meditations.component.css']
})
export class MiniMeditationsComponent implements OnInit {

  constructor(private meditationService: MeditationService) { 
    this.meditationService.pageTitleSubject.next('Mini Meditations');
  }

  ngOnInit(): void {
  }

}
