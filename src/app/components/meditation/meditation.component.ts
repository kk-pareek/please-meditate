import { Component, OnInit } from '@angular/core';
import { MeditationService } from './meditation.service';

@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.component.html',
  styleUrls: ['./meditation.component.css']
})
export class MeditationComponent implements OnInit {
  guidedMeditations: any;

  constructor(private meditationService: MeditationService) { }

  ngOnInit(): void {
    this.meditationService.fetchDefaultGuidedMeditations();
  }

}
