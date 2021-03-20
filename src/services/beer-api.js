import axios from 'axios';

export const beerList = async () => {
  const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
  const body = response.data;
  return body;
};