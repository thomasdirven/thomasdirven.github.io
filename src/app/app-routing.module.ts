import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {AboutComponent} from "./about/about.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ExperienceComponent} from "./experience/experience.component";
import {EducationComponent} from "./education/education.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data:
      {
        title: 'Thomas Dirven',
        animationState: 'LandingComponent'
      }
  },
  {
    path: 'about',
    component: AboutComponent,
    data:
      {
        title: 'About Thomas Dirven',
        animationState: 'AboutComponent'
      }
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    data:
      {
        title: 'Experience Thomas Dirven',
        animationState: 'ExperienceComponent'
      }
  },
  {
    path: 'education',
    component: EducationComponent,
    data:
      {
        title: 'Education Thomas Dirven',
        animationState: 'EducationComponent'
      }
  },
  {
    path: 'portfolio',
    component: ProjectsComponent,
    data:
      {
        title: 'Portfolio Thomas Dirven',
        animationState: 'ProjectsComponent'
      }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data:
      {
        title: 'Contact Thomas Dirven',
        animationState: 'ContactComponent'
      }
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
