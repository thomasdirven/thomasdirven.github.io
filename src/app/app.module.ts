import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ScrollDownArrowComponent } from './scroll-down-arrow/scroll-down-arrow.component';
import { ButtonOutlineComponent } from './button-outline/button-outline.component';
import { LandingIntroComponent } from './landing-intro/landing-intro.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
// import { ParticlesBackgroundComponent } from './particles-background/particles-background.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    TutorialComponent,
    LandingComponent,
    AboutComponent,
    ScrollDownArrowComponent,
    ButtonOutlineComponent,
    LandingIntroComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    // ParticlesBackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
