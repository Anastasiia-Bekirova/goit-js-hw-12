export const createGalleryCardTemplate = imgInfo => {
    return `
   <li class="gallery-card">
    <a class="gallery-card-link" href="${imgInfo.largeImageURL}">
    <img class="gallery-img" src="${imgInfo.largeImageURL}" alt="${imgInfo.tags}"
    preview="${imgInfo.webformatURL}"/> </a>
    <div class="text-information">
     <div class="fact likes">
       <h2 class="fact-description">Likes</h2>
       <p class="number">${imgInfo.likes}
       </p>
     </div>
     <div class="fact views">
       <h2 class="fact-description">Views </h2>
       <p class="number">${imgInfo.views}
       </p>
    </div>
     <div class="fact comments">
       <h2 class="fact-description">Comments </h2>
       <p class="number">${imgInfo.comments}
       </p>
      </div>
     <div class="fact downloads">
       <h2 class="fact-description">Downloads </h2>
       <p class="number">${imgInfo.downloads}
       </p>
      </div>
    </div>
  
  </li>
  `;
};