import {HostListener, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  // minInnerWidth = 1000;
  // minInnerHeight = 500;
  // innerWidth = window.innerWidth;
  // innerHeight = window.innerHeight;
  // mobileMode = false;
  // isDesktopUser = true;
  //
  // constructor() { }
  //
  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event) {
  //   this.innerWidth = window.innerWidth;
  //   this.innerHeight = window.innerHeight;
  //   this.isDesktopUser = !(this.innerWidth < this.minInnerWidth || this.innerHeight < this.minInnerHeight);
  // }

  getIsMobileScreen(): boolean {
    // return this.isDesktopUser;
    return false;
  }

}
