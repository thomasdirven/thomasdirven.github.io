import {
  animate,
  query,
  sequence,
  stagger,
  style,
  transition,
  trigger
} from "@angular/animations";

export const DropDownAnimation = trigger("dropDownMenu", [
  transition(":enter", [
    style({ height: 0, overflow: "hidden" }),
    query(".menu-item", [
      style({ opacity: 0, transform: "translateY(-50px)" })
    ]),
    sequence([
      animate("200ms", style({ height: "*" })),
      query(".menu-item", [
        stagger(-50, [
          animate("400ms ease", style({ opacity: 1, transform: "none" }))
        ])
      ])
    ])
  ]),

  transition(":leave", [
    style({ height: "*", overflow: "hidden" }),
    query(".menu-item", [style({ opacity: 1, transform: "none" })]),
    sequence([
      query(".menu-item", [
        stagger(50, [
          animate(
            "400ms ease",
            style({ opacity: 0, transform: "translateY(-50px)" })
          )
        ])
      ]),
      animate("200ms", style({ height: 0 }))
    ])
  ])
]);

export const DropDownAboutAnimation = trigger("dropDownAbout", [
  transition(":enter", [
    style({ height: 0, overflow: "hidden" }),
    query(".menu-item", [
      style({ opacity: 0, transform: "translateY(-450px)" })
    ]),
    sequence([
      animate("400ms ease", style({ height: "*" })),
      query(".menu-item", [
        stagger(-50, [
          animate("800ms ease", style({ opacity: 1, transform: "none" }))
        ])
      ])
    ])
  ]),

  transition(":leave", [
    style({ height: "*", overflow: "hidden" }),
    query(".menu-item", [style({ opacity: 1, transform: "none" })]),
    sequence([
      query(".menu-item", [
        stagger(50, [
          animate(
            "600ms ease",
            style({ opacity: 0, transform: "translateY(-450px)" })
          )
        ])
      ]),
      animate("400ms ease", style({ height: 0 }))
    ])
  ])
]);
