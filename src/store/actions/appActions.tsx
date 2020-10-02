import {
  TOKEN
} from '../types';


export const setToken = (token: string): object => ({
  type: TOKEN,
  token: token
});