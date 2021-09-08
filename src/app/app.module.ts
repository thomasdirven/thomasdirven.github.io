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

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    TutorialComponent,
    LandingComponent,
    AboutComponent,
    ScrollDownArrowComponent,
    ButtonOutlineComponent,
    LandingIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
