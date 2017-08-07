import { combineReducers } from 'redux';
import GetWeather from './get_weather_reducer';

const rootReducer = combineReducers({
  weather: GetWeather
});

export default rootReducer;
