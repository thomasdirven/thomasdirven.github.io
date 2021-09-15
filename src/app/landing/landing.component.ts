import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ParticlesConfigSlow} from "./particles-config";
import {DropDownAboutAnimation, DropDownLandingButtonsAnimation} from "../animations";
import {Router} from "@angular/router";
import {LandingIntroService} from "../services/landing-intro.service";

declare let particlesJS: any;
console.log(particlesJS);

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [DropDownAboutAnimation, DropDownLandingButtonsAnimation]
})
export class LandingComponent implements OnInit, OnDestroy {

  showAbout = false;

  minInnerWidth = 1000;
  minInnerHeight = 500;
  innerWidth = window.innerWidth;
  innerHeight = window.innerHeight;
  mobileMode = false;
  isDesktopUser = true;

  constructor(
    private router: Router,
    private landingIntroService: LandingIntroService,
    // private screenSizeService: ScreenSizeService
    ) {
  }

  public ngOnInit(): void {
    this.invokeParticles();
    this.mobileMode = this.innerWidth < this.minInnerWidth || this.innerHeight < this.minInnerHeight;

    this.isDesktopUser = !(this.innerWidth < this.minInnerWidth || this.innerHeight < this.minInnerHeight);

    this.landingIntroService.getShowAbout().subscribe(value => {
      this.showAbout = value;
      console.log("showAbout" + value);
    });

    // window.onscroll = (() => {
    //   if (window.scrollY > 50) {
    //     const elements = document.getElementsByClassName("nav");
    //     for (let i = 0; i < elements.length; i++) {
    //       elements[i].classList.add("affix");
    //     }
    //   } else {
    //     const elements = document.getElementsByClassName("nav");
    //     for (let i = 0; i < elements.length; i++) {
    //       elements[i].classList.remove("affix");
    //     }
    //   }
    // // if (this.isDesktopUser) {
    //   if (window.scrollY > 50) {
    //     this.showAbout = true;
    //   } else {
    //     this.showAbout = false;
    //   }
    // // } else {
    //     // this.router.navigate(['/about']);
    //   // }
    // });
  }



  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    const previousSize = this.isDesktopUser;
    this.isDesktopUser = !(this.innerWidth < this.minInnerWidth || this.innerHeight < this.minInnerHeight);
    // todo - dirty reload - mobile screen scrolls left and right
    if(previousSize != this.isDesktopUser) {
      // window.location.reload();
    }
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfigSlow, function() {});
    console.log(particlesJS);
  }

  ngOnDestroy(): void {
    window.onscroll = (() => {});
    const elements = document.getElementsByClassName("nav");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("affix");
    }
  }

  // todo - place this logic in service
  navigate(routeName: string) {
    // if (this.screenSizeService.getIsMobileScreen()) {
      setTimeout(() => {
        this.router.navigate([routeName]);
        this.landingIntroService.setShowAbout(false);
        setTimeout(() => {
          this.router.navigate([routeName]);
        }, 1300);
      }, 600);
    // } else {
    //   this.landingIntroService.setShowAbout(false);
    //   setTimeout(() => {
    //     this.router.navigate([routeName]);
    //   }, 1300);
    // }
  }

}
