import axios from 'axios';

const API_KEY = '138603253e84101409da5fd05c7060ed';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
  const url = `${URL}&q=${city},us`;
  const request = axios.get(url);

  // console.log('Request', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}