import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MeditationFaqsComponent } from './components/meditation/meditation-faqs/meditation-faqs.component';
import { MeditationComponent } from './components/meditation/meditation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'meditation',
    pathMatch: 'full'
  },
  {
    path: 'meditation',
    component: MeditationComponent
  },
  {
    path: 'faqs',
    component: MeditationFaqsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
