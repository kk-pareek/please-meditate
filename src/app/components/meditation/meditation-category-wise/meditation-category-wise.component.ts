import { MeditationService } from './../meditation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meditation-category-wise',
  templateUrl: './meditation-category-wise.component.html',
  styleUrls: ['./meditation-category-wise.component.css']
})
export class MeditationCategoryWiseComponent implements OnInit {
  showCategories = true;
  selectedCategory = null;
  
  constructor(private meditationService: MeditationService) { }

  ngOnInit(): void {
  }

  showCategoriesScreenToggler(category: any) {
    console.log(category);
    this.showCategories = !this.showCategories;
    this.selectedCategory = category.name;
  }

  backButtonHandler() {
    this.selectedCategory = null;
    this.showCategories = true;
    this.meditationService.pageTitleSubject.next('Guided Meditations');
  }

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
      description: 'Breathing exercises followed by deep meditative sessions.'
    },
    {
      name: 'Smile With Contentment',
      description: 'Let go and blossom in yourself.'
    },
    {
      name: 'Yog Nidra',
      description: 'Instantly recharges and brings an incredible quietness and clarity within you.'
    },
    {
      name: 'Chanting',
      description: 'Chanting sacred mantras stimulate brain areas associated with calm.'
    },
    {
      name: 'Heal With Music',
      description: 'Meditate with the perfect relaxing music to experience complete emptiness.'
    },
    {
      name: 'Alter Emotions',
      description: 'Enables you to effortlessly experience a positive state of mind.'
    }
  ];
}
