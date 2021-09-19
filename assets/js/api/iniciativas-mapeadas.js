import { renderMappedInitiative } from "../utils/render";

const initiativesParent = document.querySelector(".initiatives-container");
const res = document.querySelector("#data-iniciativasMapeadas");
res.remove();


const showMappedInitiatives = (data) => {
  data.forEach((item) => renderMappedInitiative(initiativesParent, item));
};

const init = () => {
  showMappedInitiatives(JSON.parse(res.value));
};
init();
