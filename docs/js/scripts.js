if(document.addEventListener("DOMContentLoaded",(function(){if(document.querySelector("#burgerAdmin")){let y=document.querySelector("#burgerAdmin"),f=document.querySelector(".aside-menu"),g=document.querySelector(".close-aside-menu");function e(){f.classList.toggle("d-block")}y.addEventListener("click",e),g.addEventListener("click",e)}let t=0;if(window.addEventListener("scroll",(function(){let e=window.pageYOffset||document.documentElement.scrollTop;const c=document.querySelector(".header-navigation");c.style.top=e>180&&e>t?"-100%":"0",t=e<=0?0:e}),!1),document.querySelector(".filter-item")){document.querySelectorAll(".filter-item").forEach((function(e){e.querySelector(".relative").addEventListener("click",(function(){!function(e){const t=e.querySelector(".filter-inputs"),c=e.querySelector(".filter-arrow");c.classList.toggle("active-filter"),t.classList.toggle("active-filter")}(e)}))}))}if(document.querySelector(".issue-order")){let v=document.querySelector("#phoneValidation");v.addEventListener("change",(function(){let e=(t=v.value,/\+380[0-9]{9}$/.test(t));var t;console.log(e),e?document.querySelector(".incorrect-number")?(v.classList.remove("incorrect-number"),document.querySelector(".incorect-number-test").classList.add("d-none"),v.classList.add("correct-number")):document.querySelector(".correct-number")||v.classList.add("correct-number"):(document.querySelector(".incorect-number-test").classList.remove("d-none"),document.querySelector(".correct-number")?(v.classList.remove("correct-number"),document.querySelector(".incorect-number-test").classList.remove("d-none"),v.classList.add("incorrect-number")):document.querySelector(".incorrect-number")||v.classList.add("incorrect-number"))}))}if(document.querySelector(".product-gallery")){let b=document.querySelectorAll(".products-sm img"),S=document.querySelector(".general-img img");b.forEach((function(e){e.addEventListener("click",(function(){let e=this.src,t=S.src;S.src=e,this.src=t}))}))}if(document.querySelector(".mobile-filter a")){const q=document.querySelector(".mobile-filter a"),L=document.querySelector("#filter"),E=document.querySelector(".close-filter-btn");function c(){L.classList.toggle("d-block")}console.log(q),q.addEventListener("click",(function(e){e.preventDefault(),c()})),E.addEventListener("click",c)}const n=document.querySelector(".burger"),o=document.querySelector(".main-navigation"),r=document.querySelectorAll(".scrollBurger"),l=document.querySelector(".phone-mobile"),i=document.querySelector(".blur-page");n.addEventListener("click",(function(){n.classList.toggle("active"),o.classList.toggle("activemobile"),o.classList.contains("activemobile")&&n.classList.contains("active")?(o.style.left="0",n.style.left="55%",l.style.left="20px",i.style.display="block",i.style.display="block"):(o.style.left="-100%",n.style.left="0",l.style.left="-100%",i.style.display="none")})),window.addEventListener("scroll",(function(){r.forEach((e=>{const t=e.getBoundingClientRect();t.top<=0&&t.bottom>=0&&(n.classList.remove("active"),o.classList.remove("activemobile"))}))}));const s=document.querySelector(".carousel");let u=[...document.querySelectorAll(".carousel-img")],d=u[0].offsetWidth,a=!1;function m(){for(;s.firstChild;)s.removeChild(s.firstChild);u.push(u.shift());const e=u[u.length-1].cloneNode(!0);e.style.left=-d+"rem",s.insertAdjacentElement("afterbegin",e);for(let e=0;e<u.length;e++){const t=u[e].cloneNode(!0);s.appendChild(t)}}m(),autoScrollInterval=setInterval((()=>{let e=-d-50;s.style.transition="transform .5s cubic-bezier(0,.8,.45,1.19)",s.style.transform=`translateX(${e}rem)`,a=!0,setTimeout((()=>{s.style.transition="none",s.style.transform="translateX(0)",a=!1,m()}),500)}),2e3)})),document.getElementById("min")){let e=document.getElementById("min"),t=document.getElementById("max"),c=document.getElementById("min-lbl"),n=document.getElementById("max-lbl");e.onchange=t=>{c.innerText=e.value+" грн"},t.onchange=e=>{n.innerText=t.value+" грн"}}