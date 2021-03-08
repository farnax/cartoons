import {
	REQUEST_CARTOONS,
	FETCH_CARTOONS,
	ERROR,
} from './types';

export const requestCartoons = page => ({
	type: REQUEST_CARTOONS,
	payload: page,
});

export const fetchCartoons = data => ({
	type: FETCH_CARTOONS,
	payload: data,
});

export const requestError = () => ({
	type: ERROR
});