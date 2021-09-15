import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';
import {DropDownAnimation} from "../animations";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [DropDownAnimation]
})
export class MainNavComponent implements OnInit {

  isDropDownNavOpen = false;
  minInnerWidth = 1000;
  // minInnerHeight = 900;
  innerWidth = window.innerWidth;
  // innerHeight = window.innerHeight;
  navigationLinks = ['About', 'Experience', 'Education', 'Portfolio', 'Contact'];
  // showAbout = false;
  // isDesktopUser = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.isDesktopUser = !(this.innerWidth < this.minInnerWidth || this.innerHeight < this.minInnerHeight);
    const currentRoute = window.location.href;
    if (currentRoute.endsWith('.me') || currentRoute.endsWith('4200')) {
      this.addWindowOnScrollNavBarAnimation();
    } else {
      console.log(window.location.href);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.innerWidth = window.innerWidth;
  //   this.innerHeight = window.innerHeight;
  //   this.isDesktopUser = !(this.innerWidth < this.minInnerWidth || this.innerHeight < this.minInnerHeight);
  }

  toggleActiveClass() {
    if (this.innerWidth < this.minInnerWidth) {
      this.isDropDownNavOpen = !this.isDropDownNavOpen;
      document.getElementsByClassName("navTrigger")[0].classList.toggle("active");
      // document.getElementById("mainListDiv")?.classList.toggle("show_list");
    }
  }

  navigate(navigationLink: string) {
    this.removeWindowOnScrollNavBarAnimation();
    switch (navigationLink) {
      case "About":
        this.router.navigate(['/about']);
        break;
      case "Experience":
        this.router.navigate(['/experience']);
        break;
      case "Portfolio":
        this.router.navigate(['/portfolio']);
        break;
      case "Contact":
        this.router.navigate(['/contact']);
        break;
      default:
        this.addWindowOnScrollNavBarAnimation();
        this.router.navigate(['']);
        break;
    }
  }

  addWindowOnScrollNavBarAnimation() {
    window.onscroll = (() => {});
    const elements = document.getElementsByClassName("nav");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("affix");
    }
    window.onscroll = (() => {
      // console.log("scrolling")
      if (window.scrollY > 50) {
        const elements = document.getElementsByClassName("nav");
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.add("affix");
        }
      } else {
        const elements = document.getElementsByClassName("nav");
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove("affix");
        }
      }
    });
  }

  removeWindowOnScrollNavBarAnimation() {
    window.onscroll = (() => {});
    const elements = document.getElementsByClassName("nav");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("affix");
    }
  }
}
