import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollDownArrowComponent } from './scroll-down-arrow.component';

describe('ScrollDownArrowComponent', () => {
  let component: ScrollDownArrowComponent;
  let fixture: ComponentFixture<ScrollDownArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollDownArrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollDownArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
