import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ScreenSizeService} from "../services/screen-size.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private router: Router,
    // private screenSizeService: ScreenSizeService
  ) { }

  ngOnInit(): void {
    // disableScroll();
    // window.scrollTo({top: 0, behavior: 'smooth'});
    // disableScroll();
    // enableScroll();
    // setTimeout( () => {
    //   window.scrollTo({top: 0, behavior: 'smooth'});
    // }, 500);
    // setTimeout(() => enableScroll(), 3000);
  }

  goToDisclaimer() {
    document.getElementById("workInProgressDisclaimer")?.scrollIntoView();
  }

  // todo - place this logic in service
  navigate(routeName: string) {
    // if (this.screenSizeService.getIsMobileScreen()) {
    //   setTimeout(() => {
    //     this.router.navigate([routeName]);
    //   }, 600);
    // } else {
      this.router.navigate([routeName]);
    // }
  }

}
