import {takeEvery} from 'redux-saga/effects';

import { EXAMPLE_ACTION, second_ACTION } from '../actions/example';
import { HOME_ACTION } from '../actions/home';

import { fetchExample, fetchExample_second } from './example';
import { fetchHomeData } from './home';

export default function* rootSaga() {
    yield takeEvery(HOME_ACTION, fetchHomeData);
    yield takeEvery(EXAMPLE_ACTION, fetchExample);
     yield takeEvery(second_ACTION, fetchExample_second);
    // combine all saga functions here
    // yield takeEvery(EXAMPLE_ACTION, fetchExample);

}
