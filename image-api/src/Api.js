import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 205CmDWGWl1eDYYGOzH8vy28_h6BsVEfAtj5OeLYKJY',
    },
    params: {
      query: term,
    },
  });
  // console.log(response);

  return response.data.results;
}

export default searchImages;
