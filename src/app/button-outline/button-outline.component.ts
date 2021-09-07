import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button-outline',
  templateUrl: './button-outline.component.html',
  styleUrls: ['./button-outline.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonOutlineComponent implements OnInit {

  @Input() buttonText!: string;
  @Input() isFilledButton!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
