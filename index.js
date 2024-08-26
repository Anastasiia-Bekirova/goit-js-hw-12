import{a as h,S as v,i as m}from"./assets/vendor-KI8m5ffe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const f=s=>`
   <li class="gallery-card">
    <a class="gallery-card-link" href="${s.largeImageURL}">
    <img class="gallery-img" src="${s.largeImageURL}" alt="${s.tags}"
    preview="${s.webformatURL}"/> </a>
    <div class="text-information">
     <div class="fact likes">
       <h2 class="fact-description">Likes</h2>
       <p class="number">${s.likes}
       </p>
     </div>
     <div class="fact views">
       <h2 class="fact-description">Views </h2>
       <p class="number">${s.views}
       </p>
    </div>
     <div class="fact comments">
       <h2 class="fact-description">Comments </h2>
       <p class="number">${s.comments}
       </p>
      </div>
     <div class="fact downloads">
       <h2 class="fact-description">Downloads </h2>
       <p class="number">${s.downloads}
       </p>
      </div>
    </div>
  
  </li>
  `;h.defaults.baseURL="https://pixabay.com/api/";const y=(s,t)=>{const a={params:{key:"45517273-e9991eeaabacaef63628b20e0",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}};return h.get(h.defaults.baseURL,a)};let L=new v(".gallery a",{navText:["<",">"],captionPosition:"bottom",captionsData:"alt",captionDelay:250,enableKeyboard:!0,closeText:"x",showCounter:!0,overlayOpacity:.8});const p=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),u=document.querySelector(".js-loader"),i=document.querySelector(".js-load-more");let l=1,n="",g=0;const b=async s=>{try{if(s.preventDefault(),n=p.elements.user_query.value.trim(),!n)return;u.classList.remove("is-hidden"),l=1;const t=await y(n,l);if(t.data.hits.length===0){i.classList.add("is-hidden"),m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",u.classList.add("is-hidden"),p.reset();return}const a=t.data.hits.map(e=>f(e)).join("");c.innerHTML=a,u.classList.add("is-hidden"),L.refresh(),g=c.querySelector("li").getBoundingClientRect().height,i.classList.remove("is-hidden"),t.data.hits.length<15&&i.classList.add("is-hidden")}catch(t){console.log(t)}},w=async s=>{try{l++;const t=await y(n,l),a=t.data.hits.map(o=>f(o)).join("");c.insertAdjacentHTML("beforeend",a),scrollBy({top:g*2,behavior:"smooth"}),l===t.data.totalHits&&(i.classList.add("is-hidden"),m.info({message:"We&#039re sorry, but you&#039ve reached the end of search results",position:"topRight"}))}catch(t){console.log(t)}};p.addEventListener("submit",b);i.addEventListener("click",w);
//# sourceMappingURL=index.js.map
