import { GET_WEATHER } from './../actions/index';

export default function getWeather(state=[], action){
  switch(action.type){
    case GET_WEATHER:
    return action.payload;
    default:
    return state;
  }
}
