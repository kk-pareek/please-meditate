import { Component, OnInit } from '@angular/core';
import { MeditationService } from '../../meditation.service';

@Component({
  selector: 'app-chanting-meditation',
  templateUrl: './chanting-meditation.component.html',
  styleUrls: ['./chanting-meditation.component.css']
})
export class ChantingMeditationComponent implements OnInit {

  constructor(private meditationService: MeditationService) { 
    this.meditationService.pageTitleSubject.next('Chanting Meditation');
  }

  ngOnInit(): void {
  }

}
