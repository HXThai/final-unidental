import {takeLatest, all} from 'redux-saga/effects';

/* ------------- Types ------------- */
import {TestTypes} from '../Redux/TestRedux';

/* ------------- Sagas ------------- */
import {test} from './TestSagas';

/* ------------- Connect Types To Sagas ------------- */

import {watchHome} from './homeSaga';

export default function* root() {
  yield all([watchHome()]);
}
