import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { UiService } from '../../common/ui.service';
import { MeditationService } from '../meditation.service';

@Component({
  selector: 'app-meditation-practice',
  templateUrl: './meditation-practice.component.html',
  styleUrls: ['./meditation-practice.component.css'],
})
export class MeditationPracticeComponent implements OnInit, AfterViewInit {
  @Input() guidedMeditations: any;
  filteredMeditations: any;
  showLoader = this.uiService.isLoading;
  languages = ['Hindi', 'English', 'All'];
  durations = ['0 - 10', '11 - 20', '20 - 30', 'All'];
  backgroundColors = ['yellow', 'yellowgreen', 'cyan', 'aqua'];
  selectedLanguage = 'All';
  selectedDuration = 'All';
  suggestedMeditation: any;
  categories = [
    {
      name: 'Find Balance',
      description: 'Achieve a balanced state of energy with guided chakra meditations.'
    },
    {
      name: 'Mini Meditations',
      description: 'Shorter meditations to let go of stress, and gain confidence.'
    },
    {
      name: '10 Days Challenge',
      description: 'Are you consistent enough?'
    },
    {
      name: 'Smile With Contentment',
      description: 'Just smile and let go.'
    },
    {
      name: 'Yog Nidra',
      description: 'Instantly recharges and brings an incredible quietness and clarity within you.'
    },
    {
      name: 'Chanting Meditation',
      description: 'Go within & heal. Chanting sacred mantras stimulate brain areas associated with calm.'
    },
    {
      name: 'Heal With Music',
      description: 'Meditate with the perfect relaxing music to experience complete emptiness.'
    }
  ];

  constructor(
    private meditationService: MeditationService,
    private uiService: UiService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.meditationService.fetchMeditationsSubject.subscribe(
      (guidedMeditations) => {
        this.guidedMeditations = guidedMeditations;
        this.filteredMeditations = this.guidedMeditations;
      }
    );

    this.uiService.isLoadingSubject.subscribe((isLoading) => {
      this.showLoader = isLoading;
    });
    this.meditationService.fetchDefaultGuidedMeditations();
  }

  ngAfterViewInit() {}

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
