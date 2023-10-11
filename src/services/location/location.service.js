import camelize from "camelize";
import axios from "axios";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return axios
    .get(
      `https://w18vvv2q-5001.asse.devtunnels.ms/meals-to-go-6d526/us-central1/geocode?city=${searchTerm}`
    )
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
