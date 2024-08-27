import{a as h,S as L,i as m}from"./assets/vendor-KI8m5ffe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const f=s=>`
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
  `;h.defaults.baseURL="https://pixabay.com/api/";const y=(s,t)=>{const r={params:{key:"45517273-e9991eeaabacaef63628b20e0",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}};return h.get(h.defaults.baseURL,r)};let b=new L(".gallery a",{navText:["<",">"],captionPosition:"bottom",captionsData:"alt",captionDelay:250,enableKeyboard:!0,closeText:"x",showCounter:!0,overlayOpacity:.8});const p=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),i=document.querySelector(".js-loader"),l=document.querySelector(".js-load-more");let c=1,d="",g=0,v=15;const w=async s=>{try{if(s.preventDefault(),d=p.elements.user_query.value.trim(),!d)return;i.classList.remove("is-hidden"),c=1;const t=await y(d,c);if(t.data.hits.length===0){l.classList.add("is-hidden"),m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML="",i.classList.add("is-hidden"),p.reset();return}const r=t.data.hits.map(e=>f(e)).join("");n.innerHTML=r,i.classList.add("is-hidden"),b.refresh(),g=n.querySelector("li").getBoundingClientRect().height,l.classList.remove("is-hidden"),t.data.hits.length<v&&l.classList.add("is-hidden")}catch(t){console.log(t)}},S=async s=>{try{c++,i.classList.remove("is-hidden");const t=await y(d,c),r=t.data.hits.map(e=>f(e)).join("");n.insertAdjacentHTML("beforeend",r),i.classList.add("is-hidden"),scrollBy({top:g*2,behavior:"smooth"});let o=Math.ceil(t.data.totalHits/v);c===o&&(m.info({message:"We&#039re sorry, but you&#039ve reached the end of search results",position:"topRight"}),l.classList.add("is-hidden"))}catch(t){console.log(t)}};p.addEventListener("submit",w);l.addEventListener("click",S);
//# sourceMappingURL=index.js.map
