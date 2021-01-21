import axios from 'axios';

const callApiService = {
  get: async (url, body) => {
    return axios({
      method: 'get',
      url: url,
      data: body,
    }).then(function (response) {
      console.log(response);
      if (response) {
        return response;
      } else return null;
    });
  },
  post: async (url, body) => {
    return axios({
      method: 'post',
      url: url,
      data: body,
    }).then(function (response) {
      // console.log(response);
      if (response) {
        return response;
      } else return null;
    });
  },
};

export default callApiService;
