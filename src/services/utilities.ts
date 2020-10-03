import axios from 'axios';

export const gameInstance = axios.create({
    baseURL: (process.env.REACT_APP_HALLOWEEN_API_URL || ''),
    headers: { 'Content-Type': 'application/json' }
  });

  export const getHeaders = () => {
    return {
          'Content-Type': 'application/json'
        };
  };