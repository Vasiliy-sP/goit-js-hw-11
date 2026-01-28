import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(hits) {
  const markup = hits
    .map(
      hit =>
        `<li class="gallery-item">
      <a class="gallery-link" href="${hit.largeImageURL}">
      <img src="${hit.webformatURL}" alt="${hit.tags}" class="gallery-image">
      </a>
      <div class="gallery-bottom-wrapper">
      <div class="gallery-inner-wrapper">
      <p class="gallery-wrapper-title">Likes</p>
      <p class="gallery-wrapper-value">${hit.likes}</p>
      </div>
      <div class="gallery-inner-wrapper">
      <p class="gallery-wrapper-title">Views</p>
      <p class="gallery-wrapper-value">${hit.views}</p>
      </div>
      <div class="gallery-inner-wrapper">
      <p class="gallery-wrapper-title">Comments</p>
      <p class="gallery-wrapper-value">${hit.comments}</p>
      </div>
      <div class="gallery-inner-wrapper">
      <p class="gallery-wrapper-title">Downloads</p>
      <p class="gallery-wrapper-value">${hit.downloads}</p>
      </div>
      </div></li>`
    )
    .join('');
  galleryList.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}
export function clearGallery() {
  galleryList.innerHTML = '';
}
export function showLoader() {
  loader.classList.remove('hiden');
}
export function hideLoader() {
  loader.classList.add('hiden');
}