import{S as d,i as u}from"./assets/vendor-B07T6_gy.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const h=t=>`
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
  `,m="https://pixabay.com/api/",p=t=>{const a=new URLSearchParams({key:"45517273-e9991eeaabacaef63628b20e0",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${m}?${a}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})};let f=new d(".gallery a",{navText:["<",">"],captionPosition:"bottom",captionsData:"alt",captionDelay:250,enableKeyboard:!0,closeText:"x",showCounter:!0,overlayOpacity:.8});const l=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),c=document.querySelector(".js-loader"),y=t=>{t.preventDefault();const a=l.elements.user_query.value.trim();a&&(c.classList.remove("is-hidden"),p(a).then(s=>{if(s.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML="",c.classList.add("is-hidden"),l.reset();return}const o=s.hits.map(e=>h(e)).join("");n.innerHTML=o,c.classList.add("is-hidden"),f.refresh()}).catch(s=>{console.log(s)}))};l.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
