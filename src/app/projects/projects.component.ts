import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  window = window;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  goToDisclaimer() {
    this.router.navigate(['/about']);
  }
}
