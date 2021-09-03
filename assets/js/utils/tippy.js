import tippy from "tippy.js";

const language = document.getElementById('language');

tippy("#button-language", {
  content: language.innerHTML,
  allowHTML: true,
  placement: "bottom",
  arrow: false,
  hideOnClick: "toggle",
  trigger: "click",
  interactive: true,
  theme: 'transparent'
//   offset: [20, 10],
});
