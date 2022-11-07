import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MeditationComponent } from './components/meditation/meditation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'meditation',
    pathMatch: 'full'
  },
  {
    path: 'meditation',
    component: MeditationComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
