import { Component, OnInit } from '@angular/core';
import { MeditationService } from '../../meditation.service';

@Component({
  selector: 'app-transforming-emotions',
  templateUrl: './transforming-emotions.component.html',
  styleUrls: ['./transforming-emotions.component.css']
})
export class TransformingEmotionsComponent implements OnInit {

  constructor(private meditationService: MeditationService) { 
    this.meditationService.pageTitleSubject.next('Transforming Emotions');
  }

  ngOnInit(): void {
  }

}
