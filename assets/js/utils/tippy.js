import tippy from "tippy.js";

tippy("#button-language", {
  content: 'Prueba',
  allowHTML: true,
  placement: "bottom",
  arrow: false,
  hideOnClick: "toggle",
  trigger: "click",
  interactive: true,
//   offset: [20, 10],
});
