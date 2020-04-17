import delay  from 'redux-saga';
import {takeLatest, put} from 'redux-saga/effects';

function* changeNameAsync() {
    yield delay(4000);
    yield put({type:'CHANGE_NAME_ASYNC',payload: "iwwwtsn"})
}

export function* watchChangeName() {
    yield takeLatest('CHANGE_NAME',changeNameAsync);
}