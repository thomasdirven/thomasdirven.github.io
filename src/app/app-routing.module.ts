import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data: { title: 'Thomas Dirven' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About Thomas Dirven' }
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
