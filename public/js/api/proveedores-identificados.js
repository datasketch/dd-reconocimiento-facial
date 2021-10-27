(()=>{var l=(o,e)=>{let s=`
        <div class="provider-item">
            <div class="provider-padding">
                <span class="provider-country">${e.pais}</span>
                <h3 class="provider-title">
                    ${e.nombre}
                </h3>
            </div>
            <button class="provider-button modal-button--open" data-id="${e.id}">
                Ver ficha
                <img class="provider-image" src="/images/public/icons/icon-arrow-right.svg" alt="icon arrow right">
            </button>
        </div>
    `;o.insertAdjacentHTML("beforeend",s)};var d=class{#t;#e;#s;constructor(e,s,t){this.#t=e,this.#e=s,this.#s=t,this._openModal(this.#s),document.querySelector(".modal-button--close").addEventListener("click",this._closeModal),document.querySelector(".modal-overlay").addEventListener("click",this._closeModal),window.addEventListener("keydown",c=>{c.key==="Escape"&&document.querySelector(".modal-overlay").classList.contains("modal-overlay-active")&&this._closeModal()})}_renderModalIniciativas(){let e=`
    <div class="modal">
            <div class="modal-left">
                <span class="modal-country">${this.#e.pais}</span>
                <h3 class="modal-title">
                    ${this.#e.nombre}
                </h3>
                <p class="modal-description">
                    ${this.#e.descripcion}
                </p>
            </div>
            <div class="modal-right">
                <span class="modal-estado-implementacion">Estado de la implementaci\xF3n</span>
                <ul class="modal-list">
                    <li class="modal-list-content">${this.#e.status}</li>
                </ul>

                <span class="modal-area-aplicacion">\xC1rea de aplicaci\xF3n</span>
                <ul class="modal-list">
                    ${this._renderModalArea()}
                </ul>

                <span class="modal-proveedores">Proveedores</span>
                <ul class="modal-list--blue-light">
                  ${this._renderModalProvider()}
                </ul>
            </div>
            <button class="modal-button--close">
                <i class="fas fa-times modal-icon"></i>
            </button>
        </div>
        <div class="modal-overlay"></div>
        `;this.#t.insertAdjacentHTML("beforeend",e)}_renderModalProviders(){let e=`
      <div class="modal">
          <div class="modal-left">
              <span class="modal-country">${this.#e.pais}</span>
              <h3 class="modal-title">
                 ${this.#e.nombre}
              </h3>
              <p class="modal-link">Sitio web: <a class="modal-underline" target="_blank" href="${this.#e.sitioWeb}">${this.#e.sitioWeb}</a></p>
          </div>
          <div class="modal-right modal-right-dark">
              <span class="modal-proveedores">Sistemas que ha desarrollado</span>
              <p class="modal-description modal-list--blue-light">
              ${this.#e.sistemaDesarrollado}
              </p>
          </div>
          <button class="modal-button--close">
              <i class="fas fa-times modal-icon"></i>
          </button>
      </div>
      <div class="modal-overlay"></div>
    `;this.#t.insertAdjacentHTML("beforeend",e)}_renderModalArea(){let e="",s=[...this.#e.area];return s.length>0&&s.forEach(t=>{e+=`<li class="modal-list-content">${t}</li>`}),e}_renderModalProvider(){let e="",s=this.#e.proveedores.filter(t=>t.length>0);return s.length>0?s.forEach(t=>{e+=`<li class="modal-list-content">${t}</li>`}):e+='<li class="modal-list-content">Sin proveedores</li>',e}_openModal(e){e===1?(this._renderModalIniciativas(),setTimeout(()=>{document.querySelector(".modal").classList.add("modal-active"),document.querySelector(".modal-overlay").classList.add("modal-overlay-active")},300)):e===2&&(this._renderModalProviders(),setTimeout(()=>{document.querySelector(".modal").classList.add("modal-active"),document.querySelector(".modal-overlay").classList.add("modal-overlay-active")},300))}_closeModal(){document.querySelector(".modal").classList.remove("modal-active"),document.querySelector(".modal-overlay").classList.remove("modal-overlay-active"),setTimeout(()=>{document.querySelector(".modal").remove(),document.querySelector(".modal-overlay").remove()},300)}};var i=document.querySelector(".provider-container"),a=document.querySelector("#data-proveedoresIdentificados"),m=document.querySelector("body"),v=document.querySelector("#button-container"),p=document.querySelectorAll(".button-filter"),u=document.querySelectorAll(".provider-message"),n=document.querySelectorAll(".filter-provider"),h=document.querySelector("#filterByCountries"),f=document.querySelector("#filterBySector");a.remove();var b=o=>JSON.parse(a.value).filter(t=>t.id===+o),r=o=>{i.innerHTML="",o.sort((s,t)=>s.pais>t.pais?1:s.pais<t.pais?-1:0).forEach(s=>l(i,s))},y=(o,e)=>{let s=o.filter(t=>t.pais===e);i.innerHTML="",s.forEach(t=>l(i,t))},g=(o,e)=>{let s=o.filter(t=>t.sector===e);i.innerHTML="",s.forEach(t=>l(i,t))},S=()=>{r(JSON.parse(a.value))};S();i.addEventListener("click",function(o){let e=o.target.closest(".modal-button--open");if(!e)return;let s=e.getAttribute("data-id"),t=b(s)[0],c=new d(m,t,2)});v.addEventListener("click",function(o){let e=o.target.closest(".button-filter"),s=e.getAttribute("data-tab");r(JSON.parse(a.value)),p.forEach(t=>{t.classList.remove("button-filter--active")}),u.forEach(t=>{t.classList.add("hidden")}),n.forEach(t=>{t.classList.add("hidden")}),e.classList.contains("button-filter--active")||e.classList.add("button-filter--active"),u[s].classList.remove("hidden"),!!n[s]&&n[s].classList.remove("hidden")});h.addEventListener("change",function(o){o.target.value==="Todos"?r(JSON.parse(a.value)):y(JSON.parse(a.value),o.target.value)});f.addEventListener("change",function(o){o.target.value==="Todos"?r(JSON.parse(a.value)):g(JSON.parse(a.value),o.target.value)});})();
