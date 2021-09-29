import { renderProvider } from "../utils/render";
import { Modal } from "../utils/modal";

const providerParent = document.querySelector(".provider-container");
const res = document.querySelector("#data-proveedoresIdentificados");
const body = document.querySelector("body");
const buttonParent = document.querySelector("#button-container");
const buttonFilter = document.querySelectorAll(".button-filter");
const providerMessage = document.querySelectorAll(".provider-message");
const filterProvider = document.querySelectorAll(".filter-provider");
const selectCountries = document.querySelector("#filterByCountries");
const selectSector = document.querySelector("#filterBySector");
res.remove();

const showModalProviders = (id) => {
  const data = JSON.parse(res.value);
  const result = data.filter((item) => item.id === +id);
  return result;
};

const showProvider = (data) => {
  providerParent.innerHTML = "";
  let sort = data.sort((a, b) => {
    if(a.pais > b.pais) return 1;
    if(a.pais < b.pais) return -1;
    return 0;
  })
  sort.forEach((item) => renderProvider(providerParent, item));
};

// show mappeds by country
const showProviderByCountry = (data, country) => {
  const result = data.filter((item) => item.pais === country);

  providerParent.innerHTML = "";
  result.forEach((item) => renderProvider(providerParent, item));
};

const showProviderBySector = (data, sector) => {
  const result = data.filter((item) => item.sector === sector);

  providerParent.innerHTML = "";
  result.forEach((item) => renderProvider(providerParent, item));
};

const init = () => {
  showProvider(JSON.parse(res.value));
};
init();

// EVENT HANDLERS

providerParent.addEventListener("click", function (e) {
  const childElement = e.target.closest(".modal-button--open");
  if (!childElement) return;

  // show data per index json
  const id = childElement.getAttribute("data-id");

  const result = showModalProviders(id)[0];

  const modal = new Modal(body, result, 2);
});

buttonParent.addEventListener("click", function (e) {
  const button = e.target.closest(".button-filter");
  const id = button.getAttribute("data-tab");

  // Reset providers
  showProvider(JSON.parse(res.value));

  // Reset active
  buttonFilter.forEach((button) => {
    button.classList.remove("button-filter--active");
  });

  // Reset provider message
  providerMessage.forEach((message) => {
    message.classList.add("hidden");
  });

  // Reset filter provider
  filterProvider.forEach((provider) => {
    provider.classList.add("hidden");
  });

  // Show active button filter
  if (!button.classList.contains("button-filter--active"))
    button.classList.add("button-filter--active");

  // Show initiative message
  providerMessage[id].classList.remove("hidden");

  // Show filter provider
  if (!filterProvider[id]) return;
  filterProvider[id].classList.remove("hidden");
});

// Show provider by countries event
selectCountries.addEventListener("change", function (e) {
  if (e.target.value === "Todos") showProvider(JSON.parse(res.value));
  else showProviderByCountry(JSON.parse(res.value), e.target.value);
});

// Show provider by sector event
selectSector.addEventListener("change", function (e) {
  if (e.target.value === "Todos") showProvider(JSON.parse(res.value));
  else showProviderBySector(JSON.parse(res.value), e.target.value);
});
