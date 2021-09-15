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
  transition('* => LandingComponent', [
    query(":enter, :leave", style({
      position: "fixed",
      width: "100%"
    }), { optional: true }),
    group([
      query(":enter", [
        style({transform: "translateY(120%)"}),
        animate(
          "900ms ease-in",
          style({transform: "translateY(0)"})
        )
      ], { optional: true }),
      query(":leave", [
        animate(
          "900ms ease-in",
          style({transform: "translateY(-120%)"})
        )
      ], { optional: true })
    ]),
  ]),
  transition('* => *', [
    query(":enter, :leave", style({
      position: "fixed",
      width: "100%"
    }), { optional: true }),
    group([
      query(":enter", [
        style({transform: "translateY(120%)"}),
        animate(
          "1200ms cubic-bezier(0.87, 0, 0.13, 1)",
          style({transform: "translateY(0)"})
        )
      ], { optional: true }),
      query(":leave", [
        animate(
          "1200ms cubic-bezier(0.87, 0, 0.13, 1)",
          style({transform: "translateY(-120%)"})
        )
      ], { optional: true })
    ]),
  ])
]);


