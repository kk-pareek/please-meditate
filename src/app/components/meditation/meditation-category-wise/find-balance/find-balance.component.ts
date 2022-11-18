import { MeditationService } from './../../meditation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-balance',
  templateUrl: './find-balance.component.html',
  styleUrls: ['./find-balance.component.css']
})
export class FindBalanceComponent implements OnInit {

  constructor(private meditationService: MeditationService) { 
    this.meditationService.pageTitleSubject.next('Find Balance')
  }

  ngOnInit(): void {
  }

}
