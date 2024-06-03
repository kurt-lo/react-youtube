import axios from "axios";

export const baseUrl = 'https://youtube-v31.p.rapidapi.com'

export const getApi = async (url?: string, searchQuery?: string, relatedToVideoId?: string, part?: string, id?: string) => {
  const options = {
    url: baseUrl,
    params: {
      relatedToVideoId,
      part,
      id,
      q: searchQuery,
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
    }
  };

  try {
    const response = await axios.get(`${baseUrl}/${url}`, options);
    // console.log('getApi:', response.data.items);
    return response.data.items
  } catch (error) {
    console.error(error);
  }
}

