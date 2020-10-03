import axios from 'axios';

export const gameInstance = axios.create({
    baseURL: (process.env.REACT_APP_PREDICTOR_API_URL || '') + '/predictorapi',
    timeout: parseInt(process.env.REACT_APP_REQUEST_TIMEOUT || '0', 10),
    headers: { 'Content-Type': 'application/json' }
  });

  export const getHeaders = () => {
    return {
          'Content-Type': 'application/json'
        };
  };