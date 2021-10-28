(()=>{var o=(t,s)=>{let e="";document.documentElement.lang==="es"?e=`
        <div class="provider-item">
            <div class="provider-padding">
                <span class="provider-country">${s.pais}</span>
                <h3 class="provider-title">
                    ${s.nombre}
                </h3>
            </div>
            <button class="provider-button modal-button--open" data-id="${s.id}">
                Ver ficha
                <img class="provider-image" src="/images/public/icons/icon-arrow-right.svg" alt="icon arrow right">
            </button>
        </div>
    `:document.documentElement.lang==="en"?e=`
        <div class="provider-item">
            <div class="provider-padding">
                <span class="provider-country">${s.pais}</span>
                <h3 class="provider-title">
                    ${s.nombre}
                </h3>
            </div>
            <button class="provider-button modal-button--open" data-id="${s.id}">
                See file 
                <img class="provider-image" src="/images/public/icons/icon-arrow-right.svg" alt="icon arrow right">
            </button>
        </div>
    `:e=`
        <div class="provider-item">
            <div class="provider-padding">
                <span class="provider-country">${s.pais}</span>
                <h3 class="provider-title">
                    ${s.nombre}
                </h3>
            </div>
            <button class="provider-button modal-button--open" data-id="${s.id}">
                Ver arquivo
                <img class="provider-image" src="/images/public/icons/icon-arrow-right.svg" alt="icon arrow right">
            </button>
        </div>
    `,t.insertAdjacentHTML("beforeend",e)};var d=class{#i;#s;#t;#e=document.documentElement.lang;constructor(s,e,i){this.#i=s,this.#s=e,this.#t=i,this._openModal(this.#t),document.querySelector(".modal-button--close").addEventListener("click",this._closeModal),document.querySelector(".modal-overlay").addEventListener("click",this._closeModal),window.addEventListener("keydown",c=>{c.key==="Escape"&&document.querySelector(".modal-overlay").classList.contains("modal-overlay-active")&&this._closeModal()})}_renderModalIniciativas(){let s="";this.#e==="es"?s=`
    <div class="modal">
            <div class="modal-left">
                <span class="modal-country">${this.#s.pais}</span>
                <h3 class="modal-title">
                    ${this.#s.nombre}
                </h3>
                <p class="modal-description">
                    ${this.#s.descripcion}
                </p>
            </div>
            <div class="modal-right">
                <span class="modal-estado-implementacion">Estado de la implementaci\xF3n</span>
                <ul class="modal-list">
                    <li class="modal-list-content">${this.#s.status}</li>
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
        `:this.#e==="en"?s=`
    <div class="modal">
            <div class="modal-left">
                <span class="modal-country">${this.#s.pais}</span>
                <h3 class="modal-title">
                    ${this.#s.nombre}
                </h3>
                <p class="modal-description">
                    ${this.#s.descripcion}
                </p>
            </div>
            <div class="modal-right">
                <span class="modal-estado-implementacion">Implementation status</span>
                <ul class="modal-list">
                    <li class="modal-list-content">${this.#s.status}</li>
                </ul>

                <span class="modal-area-aplicacion">Application area</span>
                <ul class="modal-list">
                    ${this._renderModalArea()}
                </ul>

                <span class="modal-proveedores">Providers</span>
                <ul class="modal-list--blue-light">
                  ${this._renderModalProvider()}
                </ul>
            </div>
            <button class="modal-button--close">
                <i class="fas fa-times modal-icon"></i>
            </button>
        </div>
        <div class="modal-overlay"></div>
        `:s=`
    <div class="modal">
            <div class="modal-left">
                <span class="modal-country">${this.#s.pais}</span>
                <h3 class="modal-title">
                    ${this.#s.nombre}
                </h3>
                <p class="modal-description">
                    ${this.#s.descripcion}
                </p>
            </div>
            <div class="modal-right">
                <span class="modal-estado-implementacion">Status de implementa\xE7\xE3o</span>
                <ul class="modal-list">
                    <li class="modal-list-content">${this.#s.status}</li>
                </ul>

                <span class="modal-area-aplicacion">Area de aplica\xE7\xE3o</span>
                <ul class="modal-list">
                    ${this._renderModalArea()}
                </ul>

                <span class="modal-proveedores">Provedores</span>
                <ul class="modal-list--blue-light">
                  ${this._renderModalProvider()}
                </ul>
            </div>
            <button class="modal-button--close">
                <i class="fas fa-times modal-icon"></i>
            </button>
        </div>
        <div class="modal-overlay"></div>
        `,this.#i.insertAdjacentHTML("beforeend",s)}_renderModalProviders(){let s="";this.#e==="es"?s=`
      <div class="modal">
          <div class="modal-left">
              <span class="modal-country">${this.#s.pais}</span>
              <h3 class="modal-title">
                 ${this.#s.nombre}
              </h3>
              <p class="modal-link">Sitio web: <a class="modal-underline" target="_blank" href="${this.#s.sitioWeb}">${this.#s.sitioWeb}</a></p>
          </div>
          <div class="modal-right modal-right-dark">
              <span class="modal-proveedores">Sistemas que ha desarrollado</span>
              <p class="modal-description modal-list--blue-light">
              ${this.#s.sistemaDesarrollado}
              </p>
          </div>
          <button class="modal-button--close">
              <i class="fas fa-times modal-icon"></i>
          </button>
      </div>
      <div class="modal-overlay"></div>
    `:this.#e==="en"?s=`
      <div class="modal">
          <div class="modal-left">
              <span class="modal-country">${this.#s.pais}</span>
              <h3 class="modal-title">
                 ${this.#s.nombre}
              </h3>
              <p class="modal-link">Web site: <a class="modal-underline" target="_blank" href="${this.#s.sitioWeb}">${this.#s.sitioWeb}</a></p>
          </div>
          <div class="modal-right modal-right-dark">
              <span class="modal-proveedores">Systems that have developed</span>
              <p class="modal-description modal-list--blue-light">
              ${this.#s.sistemaDesarrollado}
              </p>
          </div>
          <button class="modal-button--close">
              <i class="fas fa-times modal-icon"></i>
          </button>
      </div>
      <div class="modal-overlay"></div>
    `:s=`
      <div class="modal">
          <div class="modal-left">
              <span class="modal-country">${this.#s.pais}</span>
              <h3 class="modal-title">
                 ${this.#s.nombre}
              </h3>
              <p class="modal-link">Site web: <a class="modal-underline" target="_blank" href="${this.#s.sitioWeb}">${this.#s.sitioWeb}</a></p>
          </div>
          <div class="modal-right modal-right-dark">
              <span class="modal-proveedores">Sistemas que desenvolveramo</span>
              <p class="modal-description modal-list--blue-light">
              ${this.#s.sistemaDesarrollado}
              </p>
          </div>
          <button class="modal-button--close">
              <i class="fas fa-times modal-icon"></i>
          </button>
      </div>
      <div class="modal-overlay"></div>
    `,this.#i.insertAdjacentHTML("beforeend",s)}_renderModalArea(){let s="",e=[...this.#s.area];return e.length>0&&e.forEach(i=>{s+=`<li class="modal-list-content">${i}</li>`}),s}_renderModalProvider(){let s="",e=this.#s.proveedores.filter(i=>i.length>0);return e.length>0?e.forEach(i=>{s+=`<li class="modal-list-content">${i}</li>`}):this.#e==="es"?s+='<li class="modal-list-content">Sin proveedores</li>':this.#e==="en"?s+='<li class="modal-list-content">Without providers</li>':s+='<li class="modal-list-content">Sem provedores</li>',s}_openModal(s){s===1?(this._renderModalIniciativas(),setTimeout(()=>{document.querySelector(".modal").classList.add("modal-active"),document.querySelector(".modal-overlay").classList.add("modal-overlay-active")},300)):s===2&&(this._renderModalProviders(),setTimeout(()=>{document.querySelector(".modal").classList.add("modal-active"),document.querySelector(".modal-overlay").classList.add("modal-overlay-active")},300))}_closeModal(){document.querySelector(".modal").classList.remove("modal-active"),document.querySelector(".modal-overlay").classList.remove("modal-overlay-active"),setTimeout(()=>{document.querySelector(".modal").remove(),document.querySelector(".modal-overlay").remove()},300)}};var l=document.querySelector(".provider-container"),a=document.querySelector("#data-proveedoresIdentificados"),v=document.querySelector("body"),u=document.querySelector("#button-container"),p=document.querySelectorAll(".button-filter"),m=document.querySelectorAll(".provider-message"),n=document.querySelectorAll(".filter-provider"),h=document.querySelector("#filterByCountries"),b=document.querySelector("#filterBySector");a.remove();var g=t=>JSON.parse(a.value).filter(i=>i.id===+t),r=t=>{l.innerHTML="",t.sort((e,i)=>e.pais>i.pais?1:e.pais<i.pais?-1:0).forEach(e=>o(l,e))},f=(t,s)=>{let e=t.filter(i=>i.pais===s);l.innerHTML="",e.forEach(i=>o(l,i))},y=(t,s)=>{let e=t.filter(i=>i.sector===s);l.innerHTML="",e.forEach(i=>o(l,i))},$=()=>{r(JSON.parse(a.value))};$();l.addEventListener("click",function(t){let s=t.target.closest(".modal-button--open");if(!s)return;let e=s.getAttribute("data-id"),i=g(e)[0],c=new d(v,i,2)});u.addEventListener("click",function(t){let s=t.target.closest(".button-filter"),e=s.getAttribute("data-tab");r(JSON.parse(a.value)),p.forEach(i=>{i.classList.remove("button-filter--active")}),m.forEach(i=>{i.classList.add("hidden")}),n.forEach(i=>{i.classList.add("hidden")}),s.classList.contains("button-filter--active")||s.classList.add("button-filter--active"),m[e].classList.remove("hidden"),!!n[e]&&n[e].classList.remove("hidden")});h.addEventListener("change",function(t){t.target.value==="Todos"?r(JSON.parse(a.value)):f(JSON.parse(a.value),t.target.value)});b.addEventListener("change",function(t){t.target.value==="Todos"?r(JSON.parse(a.value)):y(JSON.parse(a.value),t.target.value)});})();
