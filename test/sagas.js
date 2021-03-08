import test from 'tape'

import { put, call } from 'redux-saga/effects';
import { sagaWorker, fetchCartoonsData } from '../src/redux/sagas';
import {fetchCartoons, requestCartoons} from './actions';
import { cartoonsReducer } from '../src/redux/cartoonsReducer';

const cartoons = [1];
const error = false;
const total = 0;
const loading = true;

const state = { 
	cartoons,
	error,
	total,
	loading,
};

const getState = () => state;

test('cartoons Saga test', function(t) {
  const generator = sagaWorker(getState)

  let next = generator.next(requestCartoons(1))
  t.deepEqual(next.value, call(fetchCartoonsData), 'must yield fetchCartoonsData')

  next = generator.next(cartoons)
  t.deepEqual(next.value, put(fetchCartoons(cartoons)), 'must yield fetchCartoons(cartoons)')

  t.end()
})