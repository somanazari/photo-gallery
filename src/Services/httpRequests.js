import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search";

export const getPhotoRequest = (term) => {
  return axios.get("/photos", {
    // client details
    headers: {
      Authorization: "Client-ID zFv1iH3hUONLb7gf1n_X9Ag8XxXzYaHovhquaF6c8qk",
    },
    // searched words
    params: {
      query: term,
    },
  });
};
