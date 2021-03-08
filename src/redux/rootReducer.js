import { combineReducers } from 'redux';
import {cartoonsReducer} from './cartoonsReducer';

export const rootReducer = combineReducers({
	cartoons: cartoonsReducer
});