import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { async } from '@firebase/util';
import { UiService } from '../../common/ui.service';
import { MeditationService } from '../meditation.service';

@Component({
  selector: 'app-meditation-practice',
  templateUrl: './meditation-practice.component.html',
  styleUrls: ['./meditation-practice.component.css'],
})
export class MeditationPracticeComponent implements OnInit, AfterViewInit {
  @Input() guidedMeditations: any;
  @Input() meditationCategory: any;
  filteredMeditations: any;
  showLoader = this.uiService.isLoading;
  languages = ['Hindi', 'English', 'All'];
  durations = ['0 - 10', '11 - 20', '20 - 30', 'All'];
  backgroundColors = ['yellow', 'yellowgreen', 'cyan', 'aqua'];
  selectedLanguage = 'All';
  selectedDuration = 'All';
  suggestedMeditation: any;

  constructor(
    private meditationService: MeditationService,
    private uiService: UiService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.meditationService.fetchMeditationsSubject.subscribe(
      async (guidedMeditations) => {
        this.guidedMeditations = await guidedMeditations.filter((meditation: any) => {
          return meditation.category === this.meditationCategory;
        });
        this.guidedMeditations = await this.guidedMeditations.sort(this.compare);
        this.filteredMeditations = this.guidedMeditations;
      }
    );

    this.uiService.isLoadingSubject.subscribe((isLoading) => {
      this.showLoader = isLoading;
    });
    this.meditationService.fetchDefaultGuidedMeditations();
  }

  ngAfterViewInit() {}

  compare(a: any, b: any) {
    console.log('comparing');
    if ( a.order < b.order ){
      return -1;
    }
    if ( a.order > b.order ){
      return 1;
    }
    return 0;
  }

  filterByLanguage(meditation: any) {
    return (
      this.selectedLanguage === 'All' ||
      meditation.language.includes(this.selectedLanguage)
    );
  }

  filterByDuration(meditation: any) {
    const selectedDurationSplit = this.selectedDuration.split(' - ');
    return (
      this.selectedDuration === 'All' ||
      (meditation.duration >= selectedDurationSplit[0] &&
        meditation.duration <= selectedDurationSplit[1])
    );
  }

  applyFilter() {
    this.filteredMeditations = this.guidedMeditations.filter(
      (meditation: any) => {
        return (
          this.filterByDuration(meditation) && this.filterByLanguage(meditation)
        );
      }
    );
  }

  getRandomBackgroundColor() {
    return this.backgroundColors[
      Math.floor(Math.random() * this.backgroundColors.length)
    ];
  }

  setBackgroundColorToSuggestMe() {
    this.elementRef.nativeElement.querySelectorAll(
      '.suggest-me'
    )[0].style.backgroundColor = this.getRandomBackgroundColor();
  }

  suggestMeClicked() {
    const randomIndex = Math.random() * this.guidedMeditations.length;
    this.suggestedMeditation = this.guidedMeditations[Math.floor(randomIndex)];
    this.filteredMeditations = [];
    this.filteredMeditations.push(this.suggestedMeditation);
  }

  refreshFilter() {
    this.selectedDuration = 'All';
    this.selectedLanguage = 'All';
    this.filteredMeditations = this.guidedMeditations;
    // this.filteredMeditations = this.filteredMeditations.slice(0, 5);
    // this.paginationLength = this.guidedMeditations.length;
  }

  // pageChanged(event: any) {
  //   console.log(event);
  //   if (!event.calledFromFilter) {
  //     this.applyFilter();
  //   }
  //   const startIndex = event.pageIndex * event.pageSize;
  //   const endIndex = startIndex + event.pageSize > this.filteredMeditations.length ? this.filteredMeditations.length: startIndex + event.pageSize;
  //   this.filteredMeditations = this.filteredMeditations.slice(startIndex, endIndex);
  // }
}
