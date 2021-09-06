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
  innerWidth = window.innerWidth;
  navigationLinks = ['About', 'Experience', 'Education', 'Portfolio', 'Contact'];
  innerWidthConstant = 1300;

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

    window.onscroll = (() => {
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

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.innerWidth = window.innerWidth;
  }

  toggleActiveClass() {
    if (this.innerWidth < this.innerWidthConstant) {
      this.isDropDownNavOpen = !this.isDropDownNavOpen;
      document.getElementsByClassName("navTrigger")[0].classList.toggle("active");
      // document.getElementById("mainListDiv")?.classList.toggle("show_list");
    }
  }
}
