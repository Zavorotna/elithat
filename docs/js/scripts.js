if(document.addEventListener("DOMContentLoaded",(function(){if(document.querySelector(".filter-item")){document.querySelectorAll(".filter-item").forEach((function(e){e.querySelector(".relative").addEventListener("click",(function(){!function(e){const t=e.querySelector(".filter-inputs"),l=e.querySelector(".filter-arrow");l.classList.toggle("active-filter"),t.classList.toggle("active-filter")}(e)}))}))}if(document.querySelector(".product-gallery")){let d=document.querySelectorAll(".products-sm img"),m=document.querySelector(".general-img img");d.forEach((function(e){e.addEventListener("click",(function(){let e=this.src,t=m.src;m.src=e,this.src=t}))}))}if(document.querySelector(".mobile-filter a")){const f=document.querySelector(".mobile-filter a"),y=document.querySelector("#filter"),g=document.querySelector(".close-filter-btn");function e(){y.classList.toggle("d-block")}console.log(f),f.addEventListener("click",(function(t){t.preventDefault(),e()})),g.addEventListener("click",e)}const t=document.querySelector(".burger"),l=document.querySelector(".main-navigation"),n=document.querySelectorAll(".scrollBurger"),o=document.querySelector(".phone-mobile"),c=document.querySelector(".blur-page");t.addEventListener("click",(function(){t.classList.toggle("active"),l.classList.toggle("activemobile"),l.classList.contains("activemobile")&&t.classList.contains("active")?(l.style.left="0",t.style.left="55%",o.style.left="20px",c.style.display="block",c.style.display="block"):(l.style.left="-100%",t.style.left="0",o.style.left="-100%",c.style.display="none")})),window.addEventListener("scroll",(function(){n.forEach((e=>{const n=e.getBoundingClientRect();n.top<=0&&n.bottom>=0&&(t.classList.remove("active"),l.classList.remove("activemobile"))}))}));const r=document.querySelector(".carousel");let i=[...document.querySelectorAll(".carousel-img")],s=i[0].offsetWidth,u=!1;function a(){for(;r.firstChild;)r.removeChild(r.firstChild);i.push(i.shift());const e=i[i.length-1].cloneNode(!0);e.style.left=-s+"rem",r.insertAdjacentElement("afterbegin",e);for(let e=0;e<i.length;e++){const t=i[e].cloneNode(!0);r.appendChild(t)}}a(),autoScrollInterval=setInterval((()=>{let e=-s-50;r.style.transition="transform .5s cubic-bezier(0,.8,.45,1.19)",r.style.transform=`translateX(${e}rem)`,u=!0,setTimeout((()=>{r.style.transition="none",r.style.transform="translateX(0)",u=!1,a()}),500)}),2e3)})),document.getElementById("min")){let e=document.getElementById("min"),t=document.getElementById("max"),l=document.getElementById("min-lbl"),n=document.getElementById("max-lbl");e.onchange=t=>{l.innerText=e.value+" грн"},t.onchange=e=>{n.innerText=t.value+" грн"}}