import Axios from 'axios';
import history from '../history';

const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/api/'
  // : '//localhost:4000/api/';
  : '//192.168.0.4:4000/api/'; // local network IP

const axios = Axios.create({
  withCredentials: true,
});

async function ajax(endpoint, method = 'get', data = null) {
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
    });
    return res.data;
  } catch (err) {
    // eslint-disable-next-line max-len
    console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${JSON.stringify(data)}`);
    console.dir(err);
    if (err.response && err.response.status === 401) {
      history.push('/login');
    }
    throw err;
  }
}

export default {
  get(endpoint, data) {
    return ajax(endpoint, 'GET', data);
  },
  post(endpoint, data) {
    return ajax(endpoint, 'POST', data);
  },
  put(endpoint, data) {
    return ajax(endpoint, 'PUT', data);
  },
  delete(endpoint, data) {
    return ajax(endpoint, 'DELETE', data);
  },
};
