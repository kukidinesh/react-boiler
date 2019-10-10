import 'fetch-everywhere';

import {END} from 'redux-saga';
import {takeEvery, select, call, put} from 'redux-saga/effects';

import { HOME_ACTION_RESULT, HOME_ACTION_RETRY, HOME_ACTION_ERROR } from '../actions/home';
//
const EXAMPLE_URL = `https://jsonplaceholder.typicode.com/todos/1`;

export const getExample = () => {

    return fetch(EXAMPLE_URL);
};

export function* fetchHomeData(action) {
    try {
        const response = yield call(getExample);
        const result = yield response.json();
        
        if (response.status === 200) {
            yield put({type: HOME_ACTION_RESULT, data: result});
        }
        else {
            yield put({type: HOME_ACTION_ERROR, message: result});
        }
    }
    catch (e) {
        yield put({type: HOME_ACTION_RETRY, message: e.message});
    }
    yield put(END);
}