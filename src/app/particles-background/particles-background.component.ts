import { Component, OnInit } from '@angular/core';
import {ParticlesConfigSlow} from "../landing/particles-config";

declare let particlesJS: any;

@Component({
  selector: 'app-particles-background',
  templateUrl: './particles-background.component.html',
  styleUrls: ['./particles-background.component.scss']
})
export class ParticlesBackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.invokeParticles()
  }

  public invokeParticles(): void {
    particlesJS('particles-js-bg', ParticlesConfigSlow, function() {});
  }

}
