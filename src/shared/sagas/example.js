import 'fetch-everywhere';

import {END} from 'redux-saga';
import {takeEvery, select, call, put} from 'redux-saga/effects';

import {EXAMPLE_ACTION_RESULT, EXAMPLE_ACTION_RETRY, EXAMPLE_ACTION_ERROR,second_ACTION_RESULT, second_ACTION_RETRY, second_ACTION_ERROR} from '../actions/example';
//
const EXAMPLE_URL = `https://jsonplaceholder.typicode.com/todos/1`;
const EXAMPLE_URL_second = `https://jsonplaceholder.typicode.com/todos/3`;
//
// const performLogin = (data) => {
//     return fetch(LOGIN_URL, {method: 'post', body: jsonToForm(data)});
// };

export const getExample = () => {

    return fetch(EXAMPLE_URL);
};
export const getExample_second = () => {

    return fetch(EXAMPLE_URL_second);
};

export function* fetchExample(action) {
    try {

        const response = yield call(getExample);
        const result = yield response.json();
        
        if (response.status === 200) {
            yield put({type: EXAMPLE_ACTION_RESULT, data: result});
        }
        else {
            yield put({type: EXAMPLE_ACTION_ERROR, message: result});
        }
    }
    catch (e) {
        yield put({type: EXAMPLE_ACTION_RETRY, message: e.message});
    }
    yield put(END);
}

export function* fetchExample_second(action) {
    try {

        const response = yield call(getExample_second);
        const result = yield response.json();
        
        if (response.status === 200) {
            yield put({type: second_ACTION_RESULT, data: result});
        }
        else {
            yield put({type: second_ACTION_ERROR, message: result});
        }
    }
    catch (e) {
        yield put({type: second_ACTION_RETRY, message: e.message});
    }
    yield put(END);
}
