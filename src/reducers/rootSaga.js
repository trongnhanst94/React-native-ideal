import { delay } from 'redux-saga';
import { all } from 'redux-saga/effects';

import { watchLoginSaga } from '../containers/Auth/AuthSaga';

export default function* rootSaga() {
  yield call(watchLoginSaga);              
}