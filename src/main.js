
import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api.js';

import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

let lightbox = new SimpleLightbox('.gallery a', {
    navText: ['<', '>'],
    captionPosition: 'bottom',
    captionsData: 'alt',
    captionDelay: 250,
    enableKeyboard: true,
    closeText: 'x',
    showCounter: true,
    overlayOpacity: 0.8
});
const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');
const loadMoreBtnEl = document.querySelector('.js-load-more');

let currentPage = 1;
let searchedValue = '';
let cardHeight = 0;
let limit = 15;

 
const onSearchFormSubmit = async event => {
    try {
        event.preventDefault();
    

 searchedValue = searchFormEl.elements.user_query.value.trim();

  if (!searchedValue) {
    return;
  }
        loaderEl.classList.remove('is-hidden');
        
        currentPage = 1;
        const response = await fetchPhotos(searchedValue, currentPage);
      
        if (response.data.hits.length === 0) {
          loadMoreBtnEl.classList.add('is-hidden');
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
            
          galleryEl.innerHTML = '';
         loaderEl.classList.add('is-hidden');
        searchFormEl.reset();

        return;
        };
         
       

      const galleryCardsTemplate = response.data.hits.map(imgDetails => createGalleryCardTemplate(imgDetails)).join('');

        galleryEl.innerHTML = galleryCardsTemplate;
        

        loaderEl.classList.add('is-hidden');
        lightbox.refresh();

       
       

        const galleryCardEl = galleryEl.querySelector('li');

        cardHeight = galleryCardEl.getBoundingClientRect().height;

        loadMoreBtnEl.classList.remove('is-hidden');

         if (response.data.hits.length < limit) {
             loadMoreBtnEl.classList.add('is-hidden');
        };
        
    } catch (err) {
      console.log(err);
    }
};
const onLoadMoreBtnClick = async event => {
    try {
      
    currentPage++;
  loaderEl.classList.remove('is-hidden');
    const response = await fetchPhotos(searchedValue, currentPage);

    const galleryCardsTemplate = response.data.hits
      .map(imgDetails => createGalleryCardTemplate(imgDetails))
      .join('');

    galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);
    loaderEl.classList.add('is-hidden');
    scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
      
    let totalPages = Math.ceil(response.data.totalHits / limit);

    if (currentPage === totalPages) {
       
        iziToast.info({
            message: 'We&#039re sorry, but you&#039ve reached the end of search results',
            position: 'topRight',
        });
        loadMoreBtnEl.classList.add('is-hidden');
     

    }
       
      
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);

