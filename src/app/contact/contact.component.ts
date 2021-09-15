import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  showButtons = true;

  constructor() { }

  ngOnInit(): void {
  }

  navigate(action: string) {
    setTimeout(() => {}, 300);
    switch (action) {
      case "github":
        window.open(
          'https://github.com/thomasdirven',
        '_blank'
        );
        break;
      case "mailto":
        window.location.href = 'mailto:thomas.dirven@hotmail.com';
        break;
      case "linkedin":
        // window.open(
        //   'https://github.com/thomasdirven',
        //   '_blank'
        // );
        break;
    }
  }
}
