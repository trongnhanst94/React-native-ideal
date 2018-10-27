import { LOGGED_IN_REQUEST, LOGGED_IN_SUCCESS, LOGGED_IN_ERROR } from '../Auth/AuthReducer';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from '../Auth/AuthApi';

function* LoginSaga() {
    try {
        const result = yield Api.apiLogin();   
        yield put({ type: LOGGED_IN_SUCCESS, userData: result });     
    } catch (error) {        
        yield put({ type: LOGGED_IN_ERROR, error });
    }
}
export function* watchLoginSaga() {
    yield takeLatest(LOGGED_IN_REQUEST, LoginSaga);
}