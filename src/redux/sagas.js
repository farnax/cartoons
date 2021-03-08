import {takeLatest, put, call} from 'redux-saga/effects';
import {REQUEST_CARTOONS} from './types';
import {fetchCartoons, requestError} from './actions';

export function* sagaWatcher() {
	yield takeLatest(REQUEST_CARTOONS, sagaWorker)
};

export function* sagaWorker(action) {
	try {
		const data = yield call(fetchCartoonsData, action.payload)
		yield put(fetchCartoons(data))
	} catch (err) {
		yield put(requestError())
	}
}

export async function fetchCartoonsData(page) {
	const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&limit=5`)
	return await res.json();
}
