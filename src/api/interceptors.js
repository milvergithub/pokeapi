import axios from 'axios';

export default function execute() {
  axios.interceptors.request.use(
    (request) => {
      let credentials;
      if (localStorage.getItem('credentials')) {
        credentials = JSON.parse(localStorage.getItem('credentials'));
      }
      // eslint-disable-next-line no-param-reassign
      request.headers.Authorization = credentials ? `${credentials?.token_type} ${credentials?.access_token}` : '';
      return request;
    },
    (err) => Promise.reject(err),
  );
  axios.interceptors.response.use(
    (response) => response,
    (err) => Promise.reject(err),
  );
}
