import { Component, OnInit } from '@angular/core';
import { UiService } from '../common/ui.service';
import { MeditationService } from './meditation.service';

@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.component.html',
  styleUrls: ['./meditation.component.css']
})
export class MeditationComponent implements OnInit {
  guidedMeditations: any;
  pageTitle = 'Guided Meditations';
  description = 'Category-wise Meditations';

  constructor(private meditationService: MeditationService, private uiService: UiService) { }

  ngOnInit(): void {
    this.meditationService.pageTitleSubject.subscribe((pageTitle) => {
      this.pageTitle = pageTitle;
    });
  }

  getPageTitle() {
    return this.pageTitle;
  }

}
