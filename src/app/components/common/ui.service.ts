import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService implements OnInit {
  isLoading = true;
  isLoadingSubject = new Subject<boolean>();

  ngOnInit() {
    this.isLoadingSubject.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }

  constructor() { }
}
