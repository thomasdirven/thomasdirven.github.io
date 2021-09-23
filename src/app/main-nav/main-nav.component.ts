import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';
import {DropDownAnimation} from "../animations";
import {Router} from "@angular/router";
import {LandingIntroService} from "../services/landing-intro.service";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [DropDownAnimation]
})
export class MainNavComponent implements OnInit {

  // todo - remove dirty reload because there must be some kind of memory leak
  // no time to find it now
  timesNavigated = 0;

  isDropDownNavOpen = false;
  minInnerWidth = 1000;
  // minInnerHeight = 900;
  innerWidth = window.innerWidth;
  // innerHeight = window.innerHeight;
  navigationLinks = ['About', 'Experience', 'Education', 'Portfolio', 'Contact'];
  // showAbout = false;
  // isDesktopUser = true;

  constructor(
    private router: Router,
    private landingIntroService: LandingIntroService
  ) { }

  ngOnInit(): void {
    // this.isDesktopUser = !(this.innerWidth < this.minInnerWidth || this.innerHeight < this.minInnerHeight);
    // todo
    const currentRoute = window.location.href;
    if (currentRoute.indexOf('about') == -1 &&
      currentRoute.indexOf('experience') == -1 &&
      currentRoute.indexOf('education') == -1 &&
      currentRoute.indexOf('portfolio') == -1 &&
      currentRoute.indexOf('contact') == -1) {
      this.addWindowOnScrollNavBarAnimation();
    } else {
      console.log(window.location.href);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event) {
  //   this.innerWidth = window.innerWidth;
  // //   this.innerHeight = window.innerHeight;
  // //   this.isDesktopUser = !(this.innerWidth < this.minInnerWidth || this.innerHeight < this.minInnerHeight);
  // }

  toggleActiveClass() {
    if (this.innerWidth < this.minInnerWidth) {
      this.isDropDownNavOpen = !this.isDropDownNavOpen;
      document.getElementsByClassName("navTrigger")[0].classList.toggle("active");
      // document.getElementById("mainListDiv")?.classList.toggle("show_list");
    }
  }

  navigate(navigationLink: string) {
    this.timesNavigated += 1;
    this.landingIntroService.setShowAbout(false);
    switch (navigationLink) {
      case "About":
        this.removeWindowOnScrollNavBarAnimation();
        this.router.navigate(['/about']);
        break;
      case "Experience":
        this.removeWindowOnScrollNavBarAnimation();
        this.router.navigate(['/experience']);
        break;
      case "Education":
        this.removeWindowOnScrollNavBarAnimation();
        this.router.navigate(['/education']);
        break;
      case "Portfolio":
        this.removeWindowOnScrollNavBarAnimation();
        this.router.navigate(['/portfolio']);
        break;
      case "Contact":
        this.removeWindowOnScrollNavBarAnimation();
        this.router.navigate(['/contact']);
        break;
      default:
        window.scrollTo({top: 0});
        this.landingIntroService.setShowAbout(false);
        this.addWindowOnScrollNavBarAnimation();
        this.router.navigate(['']);
        break;
    }
    if (this.timesNavigated > 7) {
      setTimeout(() => {
        console.log("reload");
        window.location.reload();
      }, 50);
    }
  }

  addWindowOnScrollNavBarAnimation() {
    window.onscroll = (() => {});
    const elements = document.getElementsByClassName("nav");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("affix");
    }
    window.onscroll = (() => {
      // console.log("scrolling");
      if (window.scrollY > 30) {
        const elements = document.getElementsByClassName("nav");
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.add("affix");
        }
        this.landingIntroService.setShowAbout(true);
      } else {
        const elements = document.getElementsByClassName("nav");
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove("affix");
        }
        this.landingIntroService.setShowAbout(false);
      }
      // this.setShowAboutForLandingComponent();
    });
  }

  removeWindowOnScrollNavBarAnimation() {
    window.onscroll = (() => {});
    const elements = document.getElementsByClassName("nav");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("affix");
    }
  }

  setShowAboutForLandingComponent() {
    if (window.scrollY > 30) {
      // console.log("main nav" + true);
      this.landingIntroService.setShowAbout(true);
      // this.showAbout = true;
    } else {
      this.landingIntroService.setShowAbout(false);
      // this.showAbout = false;
    }
  }
}
