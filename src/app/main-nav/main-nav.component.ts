import {Component, HostListener, OnInit} from '@angular/core';
import {DropDownAnimation} from "../animations";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  animations: [DropDownAnimation]
})
export class MainNavComponent implements OnInit {

  isDropDownNavOpen = false;
  minInnerWidth = 1000;
  minInnerHeight = 900;
  innerWidth = window.innerWidth;
  innerHeight = window.innerHeight;
  navigationLinks = ['About', 'Experience', 'Education', 'Portfolio', 'Contact'];
  showAbout = false;
  isDesktopUser = true;

  constructor() { }

  ngOnInit(): void {
    this.isDesktopUser = !(this.innerWidth < this.minInnerWidth || this.innerHeight < this.minInnerHeight);
    window.onscroll = (() => {
      if (window.scrollY > 50) {
        const elements = document.getElementsByClassName("nav");
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.add("affix");
        }
        this.showAbout = true;
      } else {
        const elements = document.getElementsByClassName("nav");
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove("affix");
        }
        this.showAbout = false;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.isDesktopUser = !(this.innerWidth < this.minInnerWidth || this.innerHeight < this.minInnerHeight);
  }

  toggleActiveClass() {
    if (this.innerWidth < this.minInnerWidth) {
      this.isDropDownNavOpen = !this.isDropDownNavOpen;
      document.getElementsByClassName("navTrigger")[0].classList.toggle("active");
      // document.getElementById("mainListDiv")?.classList.toggle("show_list");
    }
  }
}
