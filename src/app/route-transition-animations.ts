import {animate, group, query, style, transition, trigger} from '@angular/animations';

export const slideUp = [
  query(":enter, :leave", style({position: "fixed", width: "100%"})),
  group([
    query(":enter", [
      style({transform: "translateY(120%)"}),
      animate(
        "1s ease-in-out",
        style({transform: "translateY(0)"})
      )
    ]),
    query(":leave", [
      animate(
        "1s ease-in-out",
        style({transform: "translateY(-120%)"})
      )
    ])
  ])
];

export const routeTransitionAnimations = trigger('triggerName', [
  transition('* => *', [
    query(":enter, :leave", style({
      position: "fixed",
      width: "100%"
    })),
    group([
      query(":enter", [
        style({transform: "translateY(120%)"}),
        animate(
          "1s ease-in-out",
          style({transform: "translateY(0)"})
        )
      ]),
      query(":leave", [
        animate(
          "1s ease-in-out",
          style({transform: "translateY(-120%)"})
        )
      ])
    ]),])
]);



