import { renderProvider } from "../utils/render";
import { Modal } from "../utils/modal";

const providerParent = document.querySelector(".provider-container");
const res = document.querySelector("#data-proveedoresIdentificados");
const body = document.querySelector("body");
res.remove();

const showModalProviders = (id) => {
  const data = JSON.parse(res.value);
  const result = data.filter((item) => item.id === +id);
  return result;
};

const showProvider = (data) => {
  data.forEach((item) => renderProvider(providerParent, item));
};

providerParent.addEventListener("click", function (e) {
  const childElement = e.target.closest(".modal-button--open");
  if (!childElement) return;

  // show data per index json
  const id = childElement.getAttribute("data-id");

  const result = showModalProviders(id)[0];

  const modal = new Modal(body, result, 2);
});

const init = () => {
  showProvider(JSON.parse(res.value));
};
init();
