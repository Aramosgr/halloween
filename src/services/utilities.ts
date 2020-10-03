import axios from "axios";

export const gameInstance = axios.create({
  // TODO I should use an env file, fuck Azure
  baseURL: window.location.href.includes("localhost")
    ? ""
    : "https://halloweenapi.azurewebsites.net/",
  headers: { "Content-Type": "application/json" },
});

export const getHeaders = () => {
  return {
    "Content-Type": "application/json",
  };
};
