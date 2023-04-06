import axios from 'axios';
const params = {
  key: '31683714-8e8fa74a4326fd0a6ea7edcf8&',
  options: '&image_type=photo&orientation=horizontal',
};
axios.defaults.baseURL = 'https://pixabay.com/api/';

// export async function fetchImages(query, page) {
//   const resp = await axios.get(`
//       ?key=${params.key}q=${query}${params.options}&per_page=12&page=${page}`);
//   return resp;
// }

export const fetchImages = async (query, page) => {
  const resp = await axios.get(
    `?key=${params.key}q=${query}&page=${page}${params.options}&per_page=12`
  );
  return resp.data;
};
