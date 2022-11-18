import { Component, OnInit } from '@angular/core';
import { MeditationService } from '../../meditation.service';

@Component({
  selector: 'app-ten-days-challenge',
  templateUrl: './ten-days-challenge.component.html',
  styleUrls: ['./ten-days-challenge.component.css']
})
export class TenDaysChallengeComponent implements OnInit {

  constructor(private meditationService: MeditationService) { 
    this.meditationService.pageTitleSubject.next('10 Days Challenge');
  }

  ngOnInit(): void {
  }

}
