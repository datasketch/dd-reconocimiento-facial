import { renderMappedInitiative } from "../utils/render";
import { Modal } from "../utils/modal";

const initiativesParent = document.querySelector(".initiatives-container");
const res = document.querySelector("#data-iniciativasMapeadas");
const body = document.querySelector("body");
res.remove();

const showModalMappedInitiatives = (id) => {
  const data = JSON.parse(res.value);
  const result = data.filter((item) => item.id === +id);
  return result;
};

const showMappedInitiatives = (data) => {
  data.forEach((item) => renderMappedInitiative(initiativesParent, item));
};

initiativesParent.addEventListener("click", function (e) {
  const childElement = e.target.closest(".modal-button--open");
  if (!childElement) return;

  // show data per index json
  const id = childElement.getAttribute("data-id");
  const result = showModalMappedInitiatives(id)[0];

  let data = new Object(result);
  data = {
    aplicacionAsistenciaSocial: data.aplicacionAsistenciaSocial,
    aplicacionEducacion: data.aplicacionEducacion,
    aplicacionElecciones: data.aplicacionElecciones,
    aplicacionOtro: data.aplicacionOtro,
    aplicacionSalud: data.aplicacionSalud,
    aplicacionSeguridadPublica: data.aplicacionSeguridadPublica,
    aplicacionTransporte: data.aplicacionTransporte,
    descripcion: data.descripcion,
    estado: data.estado,
    id: data.id,
    nombre: data.nombre,
    pais: data.pais,
    proveedores: [data.proveedor1, data.proveedor2, data.proveedor3, data.proveedor4],
  };
  console.log(data);
  const modal = new Modal(body, data);
});

const init = () => {
  showMappedInitiatives(JSON.parse(res.value));
};
init();
