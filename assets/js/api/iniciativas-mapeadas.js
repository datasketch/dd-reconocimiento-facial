import { renderMappedInitiative } from "../utils/render";
import { Modal } from "../utils/modal";

const initiativesParent = document.querySelector(".initiatives-container");
const res = document.querySelector("#data-iniciativasMapeadas");
const body = document.querySelector("body");
const buttonParent = document.querySelector("#button-container");
const buttonFilter = document.querySelectorAll(".button-filter");
const initiativeInformation = document.querySelector("#initiative-information");
const selectCountries = document.querySelector("#filterByCountries");
res.remove();

// show mappeds init
const showMappedInitiatives = (data) => {
  initiativesParent.innerHTML = "";
  data.forEach((item) => renderMappedInitiative(initiativesParent, item));
};

// show mappeds by country
const showMappedByCountry = (data, country) => {
  const result = data.filter((item) => item.pais === country);

  initiativesParent.innerHTML = "";
  result.forEach((item) => renderMappedInitiative(initiativesParent, item));
};

// show mappeds by state
const showMappedByState = (data, state) => {
  const result = data.filter((item) => item.estado === state);

  initiativesParent.innerHTML = "";
  result.forEach((item) => renderMappedInitiative(initiativesParent, item));
};

// show mappeds by aplication area
const showMappedByAplicationArea = (data, area) => {};

// show mappeds by audit
const showMappedByaudit = (data, audit) => {};

// show mappeds by incident
const showMappedByIncident = (data, incident) => {};

const showModalMappedInitiatives = (id) => {
  const data = JSON.parse(res.value);
  const result = data.filter((item) => item.id === +id);
  return result;
};

// INIT MAPPEDS
const init = () => {
  showMappedInitiatives(JSON.parse(res.value));
};
init();

// showMappedByCountry(JSON.parse(res.value), "Colombia");

// showMappedByState(JSON.parse(res.value), "En proceso de implementación");

// EVENT HANDLERS

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
    proveedores: [
      data.proveedor1,
      data.proveedor2,
      data.proveedor3,
      data.proveedor4,
    ],
  };
  const modal = new Modal(body, data, 1);
});

buttonParent.addEventListener("click", function (e) {
  const button = e.target.closest(".button-filter");

  // Reset active
  buttonFilter.forEach((button) => {
    button.classList.remove("button-filter--active");
  });

  // Show active button filter
  if (!button.classList.contains("button-filter--active"))
    button.classList.add("button-filter--active");

  // Scroll in to initiative information
  setTimeout(() => {
    initiativeInformation.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, 300);
});

// Show mapped by countries event
selectCountries.addEventListener("change", function (e) {
  if (e.target.value === "Todos") showMappedInitiatives(JSON.parse(res.value));
  else showMappedByCountry(JSON.parse(res.value), e.target.value);
});
