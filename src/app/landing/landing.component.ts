import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ParticlesConfig, ParticlesConfigSlow} from "./particles-config";
import {DropDownAboutAnimation, DropDownAnimation, DropDownLandingButtonsAnimation} from "../animations";
import {Router} from "@angular/router";

declare let particlesJS: any;

// particlesJS("particles-js", {"particles":{"number":{"value":64,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2.5,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":25,"color":"#ffffff","opacity":0.42,"width":1},"move":{"enable":true,"speed":2.5,"direction":"none","random":true,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":100,"size":5,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles: Element | null, stats: { setMode: (arg0: number) => void; domElement: { style: { position: string; left: string; top: string; }; }; begin: () => void; end: () => void; }, update: FrameRequestCallback; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
// particlesJS.load("particles-js", {
//   "particles": {
//     "number": {"value": 64, "density": {"enable": true, "value_area": 800}},
//     "color": {"value": "#ffffff"},
//     "shape": {
//       "type": "circle",
//       "stroke": {"width": 0, "color": "#000000"},
//       "polygon": {"nb_sides": 5},
//       "image": {"src": "img/github.svg", "width": 100, "height": 100}
//     },
//     "opacity": {
//       "value": 0.5,
//       "random": false,
//       "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
//     },
//     "size": {"value": 2.5, "random": true, "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}},
//     "line_linked": {"enable": true, "distance": 25, "color": "#ffffff", "opacity": 0.42, "width": 1},
//     "move": {
//       "enable": true,
//       "speed": 2.5,
//       "direction": "none",
//       "random": true,
//       "straight": false,
//       "out_mode": "bounce",
//       "bounce": false,
//       "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
//     }
//   },
//   "interactivity": {
//     "detect_on": "canvas",
//     "events": {
//       "onhover": {"enable": true, "mode": "bubble"},
//       "onclick": {"enable": false, "mode": "push"},
//       "resize": true
//     },
//     "modes": {
//       "grab": {"distance": 400, "line_linked": {"opacity": 1}},
//       "bubble": {"distance": 100, "size": 5, "duration": 2, "opacity": 8, "speed": 3},
//       "repulse": {"distance": 200, "duration": 0.4},
//       "push": {"particles_nb": 4},
//       "remove": {"particles_nb": 2}
//     }
//   },
//   "retina_detect": true
// }, null);
//
// ;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [DropDownAboutAnimation, DropDownLandingButtonsAnimation]
})
export class LandingComponent implements OnInit {

  showAbout = false;
  minInnerWidth = 1000;
  minInnerHeight = 500;
  innerWidth = window.innerWidth;
  innerHeight = window.innerHeight;
  mobileMode = false;
  isDesktopUser = true;

  constructor(
    private router: Router,
    ) {
  }

  public ngOnInit(): void {
    this.invokeParticles();
    this.mobileMode = this.innerWidth < this.minInnerWidth || this.innerHeight < this.minInnerHeight;

    this.isDesktopUser = !(this.innerWidth < this.minInnerWidth || this.innerHeight < this.minInnerHeight);
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
    // if (this.isDesktopUser) {
      if (window.scrollY > 50) {

        this.showAbout = true;
      } else {

        this.showAbout = false;
      }
    // } else {
        // this.router.navigate(['/about']);
      // }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.isDesktopUser = !(this.innerWidth < this.minInnerWidth || this.innerHeight < this.minInnerHeight);
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfigSlow, function() {});
  }

}
