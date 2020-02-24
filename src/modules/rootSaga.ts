import { fork } from 'redux-saga/effects';
import {serviceListSaga} from "./servicesList";

export function* rootSaga() {
    yield fork(serviceListSaga);
}