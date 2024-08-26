import{a as l,S as u,i as p}from"./assets/vendor-CRwkH7JT.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const m=t=>`
   <li class="gallery-card">
    <a class="gallery-card-link" href="${t.largeImageURL}">
    <img class="gallery-img" src="${t.largeImageURL}" alt="${t.tags}"
    preview="${t.webformatURL}"/> </a>
    <div class="text-information">
     <div class="fact likes">
       <h2 class="fact-description">Likes</h2>
       <p class="number">${t.likes}
       </p>
     </div>
     <div class="fact views">
       <h2 class="fact-description">Views </h2>
       <p class="number">${t.views}
       </p>
    </div>
     <div class="fact comments">
       <h2 class="fact-description">Comments </h2>
       <p class="number">${t.comments}
       </p>
      </div>
     <div class="fact downloads">
       <h2 class="fact-description">Downloads </h2>
       <p class="number">${t.downloads}
       </p>
      </div>
    </div>
  
  </li>
  `;l.defaults.baseURL="https://pixabay.com/api/";const h=t=>{const r={params:{key:"45517273-e9991eeaabacaef63628b20e0",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15}};return l.get(l.defaults.baseURL,r)};let f=new u(".gallery a",{navText:["<",">"],captionPosition:"bottom",captionsData:"alt",captionDelay:250,enableKeyboard:!0,closeText:"x",showCounter:!0,overlayOpacity:.8});const n=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),c=document.querySelector(".js-loader"),y=async t=>{try{t.preventDefault();const r=n.elements.user_query.value.trim();if(!r)return;c.classList.remove("is-hidden");const a=await h(r);if(a.data.hits.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d.innerHTML="",c.classList.add("is-hidden"),n.reset();return}const o=a.data.hits.map(e=>m(e)).join("");d.innerHTML=o,c.classList.add("is-hidden"),f.refresh()}catch(r){console.log(r)}};n.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
