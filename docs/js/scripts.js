if(document.addEventListener("DOMContentLoaded",(function(){if(document.querySelector(".filter-item")){document.querySelectorAll(".filter-item").forEach((function(e){e.querySelector(".relative").addEventListener("click",(function(){!function(e){const t=e.querySelector(".filter-inputs"),l=e.querySelector(".filter-arrow");l.classList.toggle("active-filter"),t.classList.toggle("active-filter")}(e)}))}))}if(document.querySelector(".product-gallery")){var e=document.querySelectorAll(".products-sm img"),t=document.querySelector(".general-img img");e.forEach((function(e){e.addEventListener("click",(function(){let e=this.src,l=t.src;t.src=e,this.src=l}))}))}if(document.querySelector(".mobile-filter a")){const f=document.querySelector(".mobile-filter a"),y=document.querySelector("#filter"),g=document.querySelector(".close-filter-btn");function l(){y.classList.toggle("d-block")}console.log(f),f.addEventListener("click",(function(e){e.preventDefault(),l()})),g.addEventListener("click",l)}const n=document.querySelector(".burger"),o=document.querySelector(".main-navigation"),c=document.querySelectorAll(".scrollBurger"),i=document.querySelector(".phone-mobile"),r=document.querySelector(".blur-page");n.addEventListener("click",(function(){n.classList.toggle("active"),o.classList.toggle("activemobile"),o.classList.contains("activemobile")&&n.classList.contains("active")?(o.style.left="0",n.style.left="55%",i.style.left="20px",r.style.display="block",r.style.display="block"):(o.style.left="-100%",n.style.left="0",i.style.left="-100%",r.style.display="none")})),window.addEventListener("scroll",(function(){c.forEach((e=>{const t=e.getBoundingClientRect();t.top<=0&&t.bottom>=0&&(n.classList.remove("active"),o.classList.remove("activemobile"))}))}));const s=document.querySelector(".carousel");let a=[...document.querySelectorAll(".carousel-img")],u=a[0].offsetWidth,m=!1;function d(){for(;s.firstChild;)s.removeChild(s.firstChild);a.push(a.shift());const e=a[a.length-1].cloneNode(!0);e.style.left=-u+"rem",s.insertAdjacentElement("afterbegin",e);for(let e=0;e<a.length;e++){const t=a[e].cloneNode(!0);s.appendChild(t)}}d(),autoScrollInterval=setInterval((()=>{let e=-u-50;s.style.transition="transform .5s cubic-bezier(0,.8,.45,1.19)",s.style.transform=`translateX(${e}rem)`,m=!0,setTimeout((()=>{s.style.transition="none",s.style.transform="translateX(0)",m=!1,d()}),500)}),2e3)})),document.getElementById("min")){var min=document.getElementById("min"),max=document.getElementById("max"),min_l=document.getElementById("min-lbl"),max_l=document.getElementById("max-lbl");min.onchange=e=>{min_l.innerText=min.value+" грн"},max.onchange=e=>{max_l.innerText=max.value+" грн"}}