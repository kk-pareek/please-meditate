import { Component, OnInit } from '@angular/core';
import { MeditationService } from '../../meditation.service';

@Component({
  selector: 'app-yog-nidra',
  templateUrl: './yog-nidra.component.html',
  styleUrls: ['./yog-nidra.component.css']
})
export class YogNidraComponent implements OnInit {

  constructor(private meditationService: MeditationService) { 
    this.meditationService.pageTitleSubject.next('Yog Nidra');
  }

  ngOnInit(): void {
  }

}
