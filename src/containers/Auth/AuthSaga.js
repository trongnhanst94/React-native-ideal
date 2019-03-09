import { LOGGED_IN_REQUEST, LOGGED_IN_SUCCESS, LOGGED_IN_ERROR } from '../Auth/AuthAction';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from '../Auth/AuthApi';

function* LoginSaga(data) {
    const { payload } = data;
    try {
        const result = yield Api.apiLogin(payload.username, payload.password);   
        result.length !== 0 ?
        yield put({ type: LOGGED_IN_SUCCESS, userData: result }) :
        yield put({ type: LOGGED_IN_ERROR, error });   
    } catch (error) {        
        yield put({ type: LOGGED_IN_ERROR, error });
    }
}
export function* watchLoginSaga() {
    yield takeLatest(LOGGED_IN_REQUEST, LoginSaga);
}