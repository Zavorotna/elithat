document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".carousel");let t=[...document.querySelectorAll(".carousel-img")],n=t[0].offsetWidth,o=!1;function l(){for(;e.firstChild;)e.removeChild(e.firstChild);t.unshift(t.pop());const o=t[t.length-1].cloneNode(!0);o.style.left=`-${n}rem`,e.insertAdjacentElement("afterbegin",o);for(let n=0;n<t.length;n++){const o=t[n].cloneNode(!0);e.appendChild(o)}}l(),autoScrollInterval=setInterval((()=>{let t=n;e.style.transition="transform .5s ease",e.style.transform=`translateX(${t}rem)`,o=!0,setTimeout((()=>{e.style.transition="none",e.style.transform="translateX(0)",o=!1,l()}),500)}),2e3)}));