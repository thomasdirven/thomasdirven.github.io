import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LandingIntroService {

  private showAbout$ = new BehaviorSubject(false);

  constructor() { }

  setShowAbout(showAbout: boolean): void {
    this.showAbout$.next(showAbout);
  }

  getShowAbout(): Observable<boolean> {
    return this.showAbout$.asObservable();
  }

}
