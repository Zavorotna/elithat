function updateImgHeight(){if(document.querySelector(".products-sm")){console.log(1);let e=document.querySelector(".products-sm"),t=document.querySelectorAll(".products-sm img"),c=(t[0].clientHeight,document.querySelector(".general-img img")),o=document.querySelector(".product-gallery .slider-to-left"),n=document.querySelector(".product-gallery .slider-to-right"),l=0;t.length>3&&(o.classList.add("d-block"),n.classList.add("d-block"),t.forEach((function(e){e.style.minHeight=c.clientHeight/3-10+"px",e.style.marginBottom="15px"}))),e.style.height=c.clientHeight+"px",n.addEventListener("click",(function(){t[l]&&(l+=1),t[l]&&t[l].click(),t[l+2]&&(t[l-1].classList.remove("active-img"),t[l+2].classList.add("active-img"))})),o.addEventListener("click",(function(){t[l-1]&&(l-=1,console.log(t[l]),t[l+3]&&t[l+3].classList.remove("active-img"),t[l].classList.add("active-img")),t[l]&&t[l].click()}))}}if(document.addEventListener("DOMContentLoaded",(function(){if(updateImgHeight(),document.querySelector(".privacy")){let l=document.querySelector(".privacy"),r=document.querySelector(".popup"),i=document.querySelector(".close-popup");function e(){r.classList.toggle("d-block")}l.addEventListener("click",(function(t){t.preventDefault(),e()})),i.addEventListener("click",e)}if(document.querySelector("#burgerAdmin")){let s=document.querySelector("#burgerAdmin"),u=document.querySelector(".aside-menu"),d=document.querySelector(".close-aside-menu");function t(){u.classList.toggle("d-block")}s.addEventListener("click",t),d.addEventListener("click",t)}if(document.querySelector(".header-navigation")){let a=0;const m=document.querySelector(".header-navigation"),y=document.querySelector("#burger");m&&y&&window.addEventListener("scroll",(function(){let e=window.pageYOffset||document.documentElement.scrollTop;y.classList.contains("active")||(m.style.top=e>180&&e>a?"-100%":"0",a=e<=0?0:e)}),!1)}if(document.querySelector(".filter-item")){document.querySelectorAll(".filter-item").forEach((function(e){e.querySelector(".relative").addEventListener("click",(function(){!function(e){const t=e.querySelector(".filter-inputs"),c=e.querySelector(".filter-arrow");c.classList.toggle("active-filter"),t.classList.toggle("active-filter")}(e)}))}))}if(document.querySelector(".order-page")){let f=document.querySelector("#phoneValidation");f.addEventListener("change",(function(){let e=(t=f.value,/\+380[0-9]{9}$/.test(t));var t;console.log(e),e?document.querySelector(".incorrect-number")?(f.classList.remove("incorrect-number"),document.querySelector(".incorect-number-test").classList.add("d-none"),f.classList.add("correct-number")):document.querySelector(".correct-number")||f.classList.add("correct-number"):(document.querySelector(".incorect-number-test").classList.remove("d-none"),document.querySelector(".correct-number")?(f.classList.remove("correct-number"),document.querySelector(".incorect-number-test").classList.remove("d-none"),f.classList.add("incorrect-number")):document.querySelector(".incorrect-number")||f.classList.add("incorrect-number"))}))}if(document.querySelector(".product-gallery")){let g=document.querySelectorAll(".products-sm img"),v=document.querySelector(".general-img img");g.forEach((function(e){e.addEventListener("click",(function(){let e=this.src;v.src=e}))}))}if(document.querySelector(".mobile-filter a")){const b=document.querySelector(".mobile-filter a"),L=document.querySelector("#filter"),S=document.querySelector(".close-filter-btn");function c(){L.classList.toggle("d-block")}console.log(b),b.addEventListener("click",(function(e){e.preventDefault(),c()})),S.addEventListener("click",c)}if(document.querySelector("#burger")){const q=document.querySelector(".burger"),p=document.querySelector(".main-navigation"),h=document.querySelectorAll(".scrollBurger"),E=document.querySelector(".phone-mobile"),k=document.querySelector(".blur-page");function o(){q.classList.remove("active"),q.classList.add("noactive"),p.classList.remove("activemobile"),p.style.left="-100%",q.style.left="0",E.style.left="-100%",k.style.display="none"}q.addEventListener("click",(function(){q.classList.add("active"),p.classList.add("activemobile"),p.classList.contains("activemobile")&&q.classList.contains("active")?(p.style.left="0",q.style.left="55%",E.style.left="20px",k.style.display="block",k.style.display="block",q.classList.remove("noactive")):o()})),k.addEventListener("click",(function(){o()})),window.addEventListener("scroll",(function(){h.forEach((e=>{const t=e.getBoundingClientRect();t.top<=0&&t.bottom>=0&&(q.classList.remove("active"),p.classList.remove("activemobile"))}))}))}if(document.querySelector(".sub-menu")){const w=document.querySelector(".sub-menu"),x=document.querySelector(".sub-menu-block"),I=window.innerWidth;if(I<1024){let C=0;w.addEventListener("click",(function(e){e.preventDefault(),C++,1==C?x.style.display="block":(x.style.display="none",C=0)}))}w.addEventListener("mouseenter",(function(){x.style.display="block",I>=1024&&(w.style.color="#fff",w.style.backgroundColor="rgb(33, 158, 188)",w.style.border="1px solid rgb(33, 158, 188)")})),w.addEventListener("mouseleave",(function(e){x.contains(e.relatedTarget)||(x.style.display="none",w.style.color="",w.style.backgroundColor="",w.style.border="")})),x.addEventListener("mouseleave",(function(e){w.contains(e.relatedTarget)||(x.style.display="none",w.style.color="",w.style.backgroundColor="",w.style.border="")}))}if(document.querySelector(".carousel")){const A=document.querySelector(".carousel");let B=[...document.querySelectorAll(".carousel-img")],H=B[0].offsetWidth+60,T=!1;function n(){for(;A.firstChild;)A.removeChild(A.firstChild);B.push(B.shift());const e=B[B.length-1].cloneNode(!0);e.style.left=-H+"px",A.insertAdjacentElement("afterbegin",e);for(let e=0;e<B.length;e++){const t=B[e].cloneNode(!0);A.appendChild(t)}}n(),autoScrollInterval=setInterval((()=>{A.style.transition="transform .5s cubic-bezier(0,.8,.45,1.19)",A.style.transform=`translateX(${-H}px)`,T=!0,setTimeout((()=>{A.style.transition="none",A.style.transform="translateX(0)",T=!1,n()}),500)}),2e3)}})),document.getElementById("min")){let e=document.getElementById("min"),t=document.getElementById("max"),c=document.getElementById("min-lbl"),o=document.getElementById("max-lbl");e.onchange=t=>{c.innerText=e.value+" грн"},t.onchange=e=>{o.innerText=t.value+" грн"}}window.addEventListener("resize",updateImgHeight);
{const e=document.querySelector(".product-list-slider"),t=document.querySelector(".similar-products .slider-to-left"),n=document.querySelector(".similar-products .slider-to-right"),o=30;let i=[...document.querySelectorAll(".product-list-slider figure")];const l=i[0].offsetWidth+30;let d,r=0;function updateImagesWidth(){[...document.querySelectorAll(".product-list-slider figure")].forEach((function(t){r=window.innerWidth>950?(e.offsetWidth-2*o)/3:window.innerWidth>545?(e.offsetWidth-1*o)/2:e.offsetWidth,console.log(r),t.style.minWidth=r+"px"}))}function resizeFunction(){clearTimeout(d),d=setTimeout((function(){updateImagesWidth()}),100)}console.log(r),updateImagesWidth(),window.addEventListener("resize",resizeFunction);let s,c=0,u=!1,a=0,h=0;function updateCarousel(){for(;e.firstChild;)e.removeChild(e.firstChild);const t=i[i.length-1].cloneNode(!0);t.style.transform=`translateX: (-${l+30}px)`,e.insertAdjacentElement("afterbegin",t);for(let t=0;t<i.length;t++){const n=i[t].cloneNode(!0);n.style.transform=`translateX: (${t} * ${-l}px)`,e.appendChild(n)}}function goToIndex(t){u=!0;const n=-t*l;c=(c+i.length+t)%i.length,e.style.transition="transform .5s ease-in-out",e.style.transform=`translateX(${n}px)`,setTimeout((()=>{e.style.transition="none",e.style.transform="none",u=!1,updateCarousel()}),500)}function nextSlide(){i.push(i.shift()),goToIndex(1)}function prevSlide(){i.unshift(i.pop()),goToIndex(-1)}function handleTouchStart(e){a=e.touches[0].clientX}function handleTouchMove(e){h=e.touches[0].clientX}function handleTouchEnd(){const e=a-h;e>50?nextSlide():e<-50&&prevSlide()}function startSliderInterval(){s=setInterval(nextSlide,1e3)}function stopSliderInterval(){clearInterval(s)}function resetInterval(){stopSliderInterval()}function setupSlider(){updateCarousel(),e.addEventListener("touchstart",handleTouchStart),e.addEventListener("touchmove",handleTouchMove),e.addEventListener("touchend",handleTouchEnd)}i.length>3&&(setupSlider(),t.classList.add("d-block"),n.classList.add("d-block"),t.addEventListener("click",prevSlide),n.addEventListener("click",nextSlide))}