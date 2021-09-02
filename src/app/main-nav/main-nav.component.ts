import { Component, OnInit } from '@angular/core';

window.onscroll = (() => {
  if (window.scrollY > 50) {
    const elements = document.getElementsByClassName("nav");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("affix");
      console.log(elements[i].id);
    }
    console.log("OK");
  } else {
    const elements = document.getElementsByClassName("nav");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("affix");
      console.log(elements[i].id);
    }
  }
});

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



}
