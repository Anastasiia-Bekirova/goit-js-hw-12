import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api.js';

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
 
const onSearchFormSubmit = async event => {
    try {
        event.preventDefault();
    

  const searchedValue = searchFormEl.elements.user_query.value.trim();

  if (!searchedValue) {
    return;
  }
loaderEl.classList.remove('is-hidden');
        const response = await fetchPhotos(searchedValue);
      
      if (response.data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

          galleryEl.innerHTML = '';
         loaderEl.classList.add('is-hidden');
        searchFormEl.reset();

        return;
      }

      const galleryCardsTemplate = response.data.hits.map(imgDetails => createGalleryCardTemplate(imgDetails)).join('');

        galleryEl.innerHTML = galleryCardsTemplate;
        loaderEl.classList.add('is-hidden');


        lightbox.refresh();
        
    } catch (err) {
      console.log(err);
    }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);

