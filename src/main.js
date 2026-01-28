import {
    createGallery,
    clearGallery,
    hideLoader,
    showLoader,
} from './js/render-functions';

import { getImagesByQuery } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const form = document.querySelector('.form');
const userInput = document.querySelector('input');


form.addEventListener('submit', handleForm);


function handleForm(event) {
    event.preventDefault();
    const query = userInput.value.trim();
    if (query === '') {
    return;
    }
    clearGallery();
    showLoader();
    getImagesByQuery(query)
    .then(data => {
        const hits = data.hits;
        if (hits.length === 0) {
        iziToast.warning({
        message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
        }
        createGallery(hits);
    })
        
        
    .catch(() => {
        iziToast.error({
        message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
    })
        
        
    .finally(() => {
        hideLoader();
    });
}