import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { MeditationComponent } from './components/meditation/meditation.component';
import { MeditationReadComponent } from './components/meditation/meditation-read/meditation-read.component';
import { MeditationPracticeComponent } from './components/meditation/meditation-practice/meditation-practice.component';
import { VideoCardTileComponent } from './components/common/video-card-tile/video-card-tile.component';
import { DialogModalComponent } from './components/common/dialog-modal/dialog-modal.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MeditationService } from './components/meditation/meditation.service';
import { UiService } from './components/common/ui.service';
import { MeditationFaqsComponent } from './components/meditation/meditation-faqs/meditation-faqs.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderToolbarComponent,
    HomeComponent,
    MeditationComponent,
    MeditationReadComponent,
    MeditationPracticeComponent,
    VideoCardTileComponent,
    DialogModalComponent,
    MeditationFaqsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [
    MeditationService,
    UiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
