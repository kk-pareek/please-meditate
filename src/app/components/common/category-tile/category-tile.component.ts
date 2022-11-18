import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-tile',
  templateUrl: './category-tile.component.html',
  styleUrls: ['./category-tile.component.css']
})
export class CategoryTileComponent implements OnInit {
  @Input() category: any;
  constructor() { }

  ngOnInit(): void {
  }

}
