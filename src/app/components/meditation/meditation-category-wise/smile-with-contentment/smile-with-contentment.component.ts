import { Component, OnInit } from '@angular/core';
import { MeditationService } from '../../meditation.service';

@Component({
  selector: 'app-smile-with-contentment',
  templateUrl: './smile-with-contentment.component.html',
  styleUrls: ['./smile-with-contentment.component.css']
})
export class SmileWithContentmentComponent implements OnInit {

  constructor(private meditationService: MeditationService) { 
    this.meditationService.pageTitleSubject.next('Smile With Contentment');
  }

  ngOnInit(): void {
  }

}
