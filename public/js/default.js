(()=>{var s=document.querySelector("#nav"),c=document.querySelector(".menu-icon"),e=document.querySelector(".overlay"),t=()=>{c.classList.toggle("menu-icon--active"),s.classList.toggle("-left-full"),s.classList.toggle("left-0"),e.classList.toggle("hidde")};c.addEventListener("click",t);e.addEventListener("click",t);window.addEventListener("scroll",function(n){n.isTrusted&&!e.classList.contains("hidde")&&t()});window.addEventListener("keydown",function(n){n.key==="Escape"&&!e.classList.contains("hidde")&&t()});})();