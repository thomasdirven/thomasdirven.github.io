import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ScreenSizeService} from "../services/screen-size.service";
import {LandingIntroService} from "../services/landing-intro.service";

@Component({
  selector: 'app-landing-intro',
  templateUrl: './landing-intro.component.html',
  styleUrls: ['./landing-intro.component.scss']
})
export class LandingIntroComponent implements OnInit {

  showAbout = false;

  constructor(
    private router: Router,
    private landingIntroService: LandingIntroService,
    // private screenSizeService: ScreenSizeService
  ) { }

  ngOnInit(): void {
    this.landingIntroService.getShowAbout().subscribe(value => {
      this.showAbout = value;
    })
  }

  goToDisclaimer() {
    document.getElementById("workInProgressDisclaimer")?.scrollIntoView();
  }

  // todo - place this logic in service
  navigate(routeName: string) {
    // if (this.screenSizeService.getIsMobileScreen()) {
    //   setTimeout(() => {
    //     this.router.navigate([routeName]);
    //     this.landingIntroService.setShowAbout(false);
    //     setTimeout(() => {
    //       this.router.navigate([routeName]);
    //     }, 1300);
    //   }, 600);
    // } else {
      this.landingIntroService.setShowAbout(false);
      setTimeout(() => {
        this.router.navigate([routeName]);
      }, 1300);
    // }
  }

}
