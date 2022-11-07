import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeditationService {
  response: any;
  fetchMeditationsSubject = new Subject<any>();

  constructor(private db: AngularFirestore) { }

  fetchDefaultGuidedMeditations() {
    this.db.collection('default-guided-meditations').snapshotChanges().pipe(map((responseArray: any) => {
      return responseArray.map((responseArrayElement: any) => {
        return {
          id: responseArrayElement.payload.doc.id,
          url: responseArrayElement.payload.doc.data().url,
          duration: responseArrayElement.payload.doc.data().duration,
          language: responseArrayElement.payload.doc.data().language
        }
      })
    })).subscribe((guidedMeditaions: any) => {
      this.fetchMeditationsSubject.next(guidedMeditaions);
    });
  }
}
