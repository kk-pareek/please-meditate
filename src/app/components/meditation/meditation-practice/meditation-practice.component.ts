import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MeditationService } from '../meditation.service';

@Component({
  selector: 'app-meditation-practice',
  templateUrl: './meditation-practice.component.html',
  styleUrls: ['./meditation-practice.component.css']
})
export class MeditationPracticeComponent implements OnInit, AfterViewInit {
  @Input() guidedMeditations: any;
  filteredMeditations: any;
  languages = ['Hindi', 'English', 'All'];
  durations = ['0 - 10', '11 - 20', '20 - 30', 'All'];
  selectedLanguage = 'All';
  selectedDuration = 'All';

  constructor(private meditationService: MeditationService) { }

  ngOnInit(): void {
    this.meditationService.fetchMeditationsSubject.subscribe((guidedMeditations) => {
      this.guidedMeditations = guidedMeditations;
      this.filteredMeditations = this.guidedMeditations;
    });
  }

  ngAfterViewInit() {
  }

  filterByLanguage(meditation: any) {
    return (this.selectedLanguage === 'All' || meditation.language.includes(this.selectedLanguage));
  }

  filterByDuration(meditation: any) {
    const selectedDurationSplit = this.selectedDuration.split(' - ');
    return (this.selectedDuration === 'All' || (meditation.duration >= selectedDurationSplit[0] && meditation.duration <= selectedDurationSplit[1]));
  }

  applyFilter() {
    this.filteredMeditations = this.guidedMeditations.filter((meditation: any) => {
      return this.filterByDuration(meditation) && this.filterByLanguage(meditation);
    })
  }
}
