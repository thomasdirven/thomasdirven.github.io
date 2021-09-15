import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ScreenSizeService} from "../services/screen-size.service";

@Component({
  selector: 'app-landing-intro',
  templateUrl: './landing-intro.component.html',
  styleUrls: ['./landing-intro.component.scss']
})
export class LandingIntroComponent implements OnInit {

  constructor(private router: Router,
              private screenSizeService: ScreenSizeService) { }

  ngOnInit(): void {
  }

  goToDisclaimer() {
    document.getElementById("workInProgressDisclaimer")?.scrollIntoView();
  }

  // todo - place this logic in service
  navigate(routeName: string) {
    if (this.screenSizeService.getIsMobileScreen()) {
      setTimeout(() => {
        this.router.navigate([routeName]);
      }, 600);
    } else {
      this.router.navigate([routeName]);
    }
  }

}
