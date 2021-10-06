(()=>{var l=(e,t)=>{let a=`
      <div class="initiatives">
          <div class="initiatives-padding">
              <span class="initiatives-country">${t.pais}</span>
              <h3 class="initiatives-title">
                  ${t.nombre}
              </h3>
          </div>
          <button data-id="${t.id}"
              class="initiatives-button modal-button--open">
              Ver ficha
              <img class="initiatives-image" src="/images/public/icons/icon-arrow-right.svg" alt="icon arrow right">
          </button>
      </div>
      `;e.insertAdjacentHTML("beforeend",a)};var n=class{#t;#e;#s;constructor(t,a,s){this.#t=t,this.#e=a,this.#s=s,this._openModal(this.#s),document.querySelector(".modal-button--close").addEventListener("click",this._closeModal),document.querySelector(".modal-overlay").addEventListener("click",this._closeModal),window.addEventListener("keydown",u=>{u.key==="Escape"&&document.querySelector(".modal-overlay").classList.contains("modal-overlay-active")&&this._closeModal()})}_renderModalIniciativas(){let t=`
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
        `;this.#t.insertAdjacentHTML("beforeend",t)}_renderModalProviders(){let t=`
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
    `;this.#t.insertAdjacentHTML("beforeend",t)}_renderModalArea(){let t="",a=[...this.#e.area];return a.length>0&&a.forEach(s=>{t+=`<li class="modal-list-content">${s}</li>`}),console.log(t),t}_renderModalProvider(){let t="",a=this.#e.proveedores.filter(s=>s.length>0);return a.length>0?a.forEach(s=>{t+=`<li class="modal-list-content">${s}</li>`}):t+='<li class="modal-list-content">Sin proveedores</li>',t}_openModal(t){t===1?(this._renderModalIniciativas(),setTimeout(()=>{document.querySelector(".modal").classList.add("modal-active"),document.querySelector(".modal-overlay").classList.add("modal-overlay-active")},300)):t===2&&(this._renderModalProviders(),setTimeout(()=>{document.querySelector(".modal").classList.add("modal-active"),document.querySelector(".modal-overlay").classList.add("modal-overlay-active")},300))}_closeModal(){document.querySelector(".modal").classList.remove("modal-active"),document.querySelector(".modal-overlay").classList.remove("modal-overlay-active"),setTimeout(()=>{document.querySelector(".modal").remove(),document.querySelector(".modal-overlay").remove()},300)}};var i=document.querySelector(".initiatives-container"),d=document.querySelector("#data-iniciativasMapeadas"),v=document.querySelector("body"),p=document.querySelector("#button-container"),h=document.querySelectorAll(".button-filter"),f=document.querySelector("#filterByCountries"),y=document.querySelector("#filterByState"),b=document.querySelector("#filterByArea"),g=document.querySelector("#filterByImpactAudit"),M=document.querySelector("#filterByIncident"),m=document.querySelectorAll(".initiative-message"),c=document.querySelectorAll(".filter-initiative");d.remove();var o=[];JSON.parse(d.value).forEach(e=>{let t={id:e.id,nombre:e.nombre,pais:e.pais,descripcion:e.descripcion,status:e.status,area:e.area.split(",").map(a=>a.trim()),impacto:e.impacto.split(",").map(a=>a.trim()),incidentes:e.incidentes,proveedores:[e.proveedor1,e.proveedor2,e.proveedor3,e.proveedor4]};o.push(t)});var r=e=>{i.innerHTML="",e.sort((a,s)=>a.pais>s.pais?1:a.pais<s.pais?-1:0).forEach(a=>l(i,a))},L=(e,t)=>{let a=e.filter(s=>s.pais===t);i.innerHTML="",a.forEach(s=>l(i,s))},S=(e,t)=>{let a=e.filter(s=>s.status===t);i.innerHTML="",a.forEach(s=>l(i,s))},E=(e,t)=>{let a=e.filter(s=>s.area.includes(t));i.innerHTML="",a.forEach(s=>l(i,s))},q=(e,t)=>{let a=e.filter(s=>s.impacto.includes(t));i.innerHTML="",a.forEach(s=>l(i,s))},$=(e,t)=>{let a=e.filter(s=>s.incidentes===t);i.innerHTML="",a.forEach(s=>l(i,s))},T=e=>o.filter(t=>t.id===+e),A=()=>{r(o)};A();i.addEventListener("click",function(e){let t=e.target.closest(".modal-button--open");if(!t)return;let a=t.getAttribute("data-id"),s=T(a)[0],u=new n(v,s,1)});p.addEventListener("click",function(e){let t=e.target.closest(".button-filter"),a=t.getAttribute("data-tab");r(JSON.parse(d.value)),h.forEach(s=>{s.classList.remove("button-filter--active")}),m.forEach(s=>{s.classList.add("hidden")}),c.forEach(s=>{s.classList.add("hidden")}),t.classList.contains("button-filter--active")||t.classList.add("button-filter--active"),m[a].classList.remove("hidden"),!!c[a]&&c[a].classList.remove("hidden")});f.addEventListener("change",function(e){e.target.value==="Todos"?r(o):L(o,e.target.value)});y.addEventListener("change",function(e){e.target.value==="Todos"?r(o):S(o,e.target.value)});b.addEventListener("change",function(e){e.target.value==="Todos"?r(o):E(o,e.target.value)});g.addEventListener("change",function(e){e.target.value==="Todos"?r(o):q(o,e.target.value)});M.addEventListener("change",function(e){e.target.value==="Todos"?r(o):$(o,e.target.value)});})();
