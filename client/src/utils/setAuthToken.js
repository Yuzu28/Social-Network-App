import axios from 'axios';

const setAuthToken = token => {
        //check if a token is in local storage
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;


