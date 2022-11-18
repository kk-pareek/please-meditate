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
import { CategoryTileComponent } from './components/common/category-tile/category-tile.component';
import { MeditationCategoryWiseComponent } from './components/meditation/meditation-category-wise/meditation-category-wise.component';
import { FindBalanceComponent } from './components/meditation/meditation-category-wise/find-balance/find-balance.component';
import { TenDaysChallengeComponent } from './components/meditation/meditation-category-wise/ten-days-challenge/ten-days-challenge.component';
import { MiniMeditationsComponent } from './components/meditation/meditation-category-wise/mini-meditations/mini-meditations.component';
import { TransformingEmotionsComponent } from './components/meditation/meditation-category-wise/transforming-emotions/transforming-emotions.component';
import { SmileWithContentmentComponent } from './components/meditation/meditation-category-wise/smile-with-contentment/smile-with-contentment.component';
import { YogNidraComponent } from './components/meditation/meditation-category-wise/yog-nidra/yog-nidra.component';
import { ChantingMeditationComponent } from './components/meditation/meditation-category-wise/chanting-meditation/chanting-meditation.component';
import { HealWithMusicComponent } from './components/meditation/meditation-category-wise/heal-with-music/heal-with-music.component';

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
    PageNotFoundComponent,
    CategoryTileComponent,
    MeditationCategoryWiseComponent,
    FindBalanceComponent,
    TenDaysChallengeComponent,
    MiniMeditationsComponent,
    TransformingEmotionsComponent,
    SmileWithContentmentComponent,
    YogNidraComponent,
    ChantingMeditationComponent,
    HealWithMusicComponent
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
