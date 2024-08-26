import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPhotos = searchedQuery => {
  const axiosOptions = {
    params: {
      key: '45517273-e9991eeaabacaef63628b20e0', 
      q: searchedQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 15,
     }
   
  };

  return axios.get(axios.defaults.baseURL, axiosOptions);
};