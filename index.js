import{S as p,a as u,i as n}from"./assets/vendor-D7QHNKaZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const i=document.querySelector(".gallery"),c=document.querySelector(".loader"),d=new p(".gallery a");function y(s){const t=s.map(r=>`<li class="gallery-item">
      <a class="gallery-link" href="${r.largeImageURL}">
      <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-image">
      </a>
      <div class="gallery-bottom-wrapper">
      <div class="gallery-inner-wrapper">
      <p class="gallery-wrapper-title">Likes</p>
      <p class="gallery-wrapper-value">${r.likes}</p>
      </div>
      <div class="gallery-inner-wrapper">
      <p class="gallery-wrapper-title">Views</p>
      <p class="gallery-wrapper-value">${r.views}</p>
      </div>
      <div class="gallery-inner-wrapper">
      <p class="gallery-wrapper-title">Comments</p>
      <p class="gallery-wrapper-value">${r.comments}</p>
      </div>
      <div class="gallery-inner-wrapper">
      <p class="gallery-wrapper-title">Downloads</p>
      <p class="gallery-wrapper-value">${r.downloads}</p>
      </div>
      </div></li>`).join("");i.insertAdjacentHTML("beforeend",t),d.refresh()}function g(){i.innerHTML=""}function m(){c.classList.remove("hiden")}function f(){c.classList.add("hiden")}const h="https://pixabay.com/api/",w="54348219-a06ea9de282acf79dc86455ae";function v(s){return u.get(h,{params:{key:w,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const L=document.querySelector(".form"),b=document.querySelector("input");L.addEventListener("submit",q);function q(s){s.preventDefault();const t=b.value.trim();t!==""&&(g(),m(),v(t).then(r=>{const l=r.hits;if(l.length===0){n.warning({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(l)}).catch(()=>{n.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{f()}))}
//# sourceMappingURL=index.js.map
