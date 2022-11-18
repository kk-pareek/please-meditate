import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { UiService } from '../common/ui.service';

@Injectable({
  providedIn: 'root'
})
export class MeditationService {
  response: any;
  fetchMeditationsSubject = new Subject<any>();
  fetchedMeditations: any;
  date = new Date();
  previousDate = new Date();
  currentDate = `${this.date.getDate()}-${this.date.getMonth()+1}-${this.date.getFullYear()}`;
  pageTitleSubject = new Subject<any>();

  constructor(private db: AngularFirestore, private uiService: UiService) { }

  fetchDefaultGuidedMeditations() {
    if (!localStorage.getItem(this.currentDate)) {
      this.db.collection('default-guided-meditations').snapshotChanges().pipe(map((responseArray: any) => {
        return responseArray.map((responseArrayElement: any) => {
          return {
            id: responseArrayElement.payload.doc.id,
            url: responseArrayElement.payload.doc.data().url,
            duration: responseArrayElement.payload.doc.data().duration,
            language: responseArrayElement.payload.doc.data().language,
            category: responseArrayElement.payload.doc.data().category,
            order: responseArrayElement.payload.doc.data().order
          }
        })
      })).subscribe((guidedMeditaions: any) => {
        this.uiService.isLoadingSubject.next(false);
        this.fetchedMeditations = guidedMeditaions;
        this.fetchMeditationsSubject.next(this.fetchedMeditations);
        this.updateLocalStorage();
      });
    } else {
      this.uiService.isLoadingSubject.next(false);
      this.fetchedMeditations = localStorage.getItem(this.currentDate);
      this.fetchedMeditations = JSON.parse(this.fetchedMeditations);
      this.fetchMeditationsSubject.next(this.fetchedMeditations);
    }
  }

  updateLocalStorage() {
    localStorage.setItem(this.currentDate, JSON.stringify(this.fetchedMeditations));
    this.previousDate.setDate(this.previousDate.getDate()-1);
    const previousDateString = `${this.previousDate.getDate()}-${this.previousDate.getMonth()+1}-${this.previousDate.getFullYear()}`;
    if (localStorage.getItem(previousDateString)) {
      localStorage.removeItem(previousDateString);
    }
  }
}
