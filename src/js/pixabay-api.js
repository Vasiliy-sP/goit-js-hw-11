import axios from 'axios';

const baseUrl = 'https://pixabay.com/api/';
const API = '54348219-a06ea9de282acf79dc86455ae';

export function getImagesByQuery(query) {
  return axios
    .get(baseUrl, {
      params: {
        key: API,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}