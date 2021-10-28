(()=>{var l=(e,s)=>{let i="";document.documentElement.lang==="es"?i=`
        <div class="initiatives">
            <div class="initiatives-padding">
                <span class="initiatives-country">${s.pais}</span>
                <h3 class="initiatives-title">
                    ${s.nombre}
                </h3>
            </div>
            <button data-id="${s.id}"
                class="initiatives-button modal-button--open">
                Ver ficha
                <img class="initiatives-image" src="/images/public/icons/icon-arrow-right.svg" alt="icon arrow right">
            </button>
        </div>
        `:document.documentElement.lang==="en"?i=`
        <div class="initiatives">
            <div class="initiatives-padding">
                <span class="initiatives-country">${s.pais}</span>
                <h3 class="initiatives-title">
                    ${s.nombre}
                </h3>
            </div>
            <button data-id="${s.id}"
                class="initiatives-button modal-button--open">
                See file
                <img class="initiatives-image" src="/images/public/icons/icon-arrow-right.svg" alt="icon arrow right">
            </button>
        </div>
        `:i=`
        <div class="initiatives">
            <div class="initiatives-padding">
                <span class="initiatives-country">${s.pais}</span>
                <h3 class="initiatives-title">
                    ${s.nombre}
                </h3>
            </div>
            <button data-id="${s.id}"
                class="initiatives-button modal-button--open">
                Ver arquivo
                <img class="initiatives-image" src="/images/public/icons/icon-arrow-right.svg" alt="icon arrow right">
            </button>
        </div>
        `,e.insertAdjacentHTML("beforeend",i)};var d=class{#t;#s;#i;#e=document.documentElement.lang;constructor(s,i,t){this.#t=s,this.#s=i,this.#i=t,this._openModal(this.#i),document.querySelector(".modal-button--close").addEventListener("click",this._closeModal),document.querySelector(".modal-overlay").addEventListener("click",this._closeModal),window.addEventListener("keydown",m=>{m.key==="Escape"&&document.querySelector(".modal-overlay").classList.contains("modal-overlay-active")&&this._closeModal()})}_renderModalIniciativas(){let s="";this.#e==="es"?s=`
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
        `,this.#t.insertAdjacentHTML("beforeend",s)}_renderModalProviders(){let s="";this.#e==="es"?s=`
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
    `,this.#t.insertAdjacentHTML("beforeend",s)}_renderModalArea(){let s="",i=[...this.#s.area];return i.length>0&&i.forEach(t=>{s+=`<li class="modal-list-content">${t}</li>`}),s}_renderModalProvider(){let s="",i=this.#s.proveedores.filter(t=>t.length>0);return i.length>0?i.forEach(t=>{s+=`<li class="modal-list-content">${t}</li>`}):this.#e==="es"?s+='<li class="modal-list-content">Sin proveedores</li>':this.#e==="en"?s+='<li class="modal-list-content">Without providers</li>':s+='<li class="modal-list-content">Sem provedores</li>',s}_openModal(s){s===1?(this._renderModalIniciativas(),setTimeout(()=>{document.querySelector(".modal").classList.add("modal-active"),document.querySelector(".modal-overlay").classList.add("modal-overlay-active")},300)):s===2&&(this._renderModalProviders(),setTimeout(()=>{document.querySelector(".modal").classList.add("modal-active"),document.querySelector(".modal-overlay").classList.add("modal-overlay-active")},300))}_closeModal(){document.querySelector(".modal").classList.remove("modal-active"),document.querySelector(".modal-overlay").classList.remove("modal-overlay-active"),setTimeout(()=>{document.querySelector(".modal").remove(),document.querySelector(".modal-overlay").remove()},300)}};var a=document.querySelector(".initiatives-container"),r=document.querySelector("#data-iniciativasMapeadas"),v=document.querySelector("body"),p=document.querySelector("#button-container"),h=document.querySelectorAll(".button-filter"),b=document.querySelector("#filterByCountries"),f=document.querySelector("#filterByState"),g=document.querySelector("#filterByArea"),y=document.querySelector("#filterByImpactAudit"),$=document.querySelector("#filterByIncident"),u=document.querySelectorAll(".initiative-message"),c=document.querySelectorAll(".filter-initiative");r.remove();var o=[];JSON.parse(r.value).forEach(e=>{let s={id:e.id,nombre:e.nombre,pais:e.pais,descripcion:e.descripcion,status:e.status,area:e.area.split(",").map(i=>i.trim()),impacto:e.impacto.split(",").map(i=>i.trim()),incidentes:e.incidentes,proveedores:[e.proveedor1,e.proveedor2,e.proveedor3,e.proveedor4]};o.push(s)});var n=e=>{a.innerHTML="",e.sort((i,t)=>i.pais>t.pais?1:i.pais<t.pais?-1:0).forEach(i=>l(a,i))},M=(e,s)=>{let i=e.filter(t=>t.pais===s);a.innerHTML="",i.forEach(t=>l(a,t))},S=(e,s)=>{let i=e.filter(t=>t.status===s);a.innerHTML="",i.forEach(t=>l(a,t))},L=(e,s)=>{let i=e.filter(t=>t.area.includes(s));a.innerHTML="",i.forEach(t=>l(a,t))},E=(e,s)=>{let i=e.filter(t=>t.impacto.includes(s));a.innerHTML="",i.forEach(t=>l(a,t))},q=(e,s)=>{let i=e.filter(t=>t.incidentes===s);a.innerHTML="",i.forEach(t=>l(a,t))},w=e=>o.filter(s=>s.id===+e),A=()=>{n(o)};A();a.addEventListener("click",function(e){let s=e.target.closest(".modal-button--open");if(!s)return;let i=s.getAttribute("data-id"),t=w(i)[0],m=new d(v,t,1)});p.addEventListener("click",function(e){let s=e.target.closest(".button-filter"),i=s.getAttribute("data-tab");n(JSON.parse(r.value)),h.forEach(t=>{t.classList.remove("button-filter--active")}),u.forEach(t=>{t.classList.add("hidden")}),c.forEach(t=>{t.classList.add("hidden")}),s.classList.contains("button-filter--active")||s.classList.add("button-filter--active"),u[i].classList.remove("hidden"),!!c[i]&&c[i].classList.remove("hidden")});b.addEventListener("change",function(e){e.target.value==="Todos"?n(o):M(o,e.target.value)});f.addEventListener("change",function(e){e.target.value==="Todos"?n(o):S(o,e.target.value)});g.addEventListener("change",function(e){e.target.value==="Todos"?n(o):L(o,e.target.value)});y.addEventListener("change",function(e){e.target.value==="Todos"?n(o):E(o,e.target.value)});$.addEventListener("change",function(e){e.target.value==="Todos"?n(o):q(o,e.target.value)});})();
