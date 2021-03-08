import {FETCH_CARTOONS, ERROR } from './types';

const initialState = {
	error: false,
	cartoons: [],
	total: 0,
	loading: true,
};

export const cartoonsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CARTOONS: 
			return {
				...state,
			 	cartoons: [...state.cartoons, ...action.payload.results], 
			 	total: action.payload.info.count,
			 	loading: false
			};

		
		case ERROR: {
			return {
				...state, 
				error: true,
				loading: false
			}
		}
		default: return state;
	}
};