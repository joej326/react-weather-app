
import axios from 'axios';

export const GET_WEATHER = 'GET_WEATHER';

const apiCall = `http://api.openweathermap.org/data/2.5/weather?q=`;
const apiKey = '&APPID=a6c45a3b8b1f377d5bcdc4ecde68b577';

export function getWeather(userInput){
  return {
    type: GET_WEATHER,
    payload: axios.get(`${apiCall}${userInput}${apiKey}&units=imperial`)
  }
}
