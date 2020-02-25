import { fork } from 'redux-saga/effects';
import {serviceListSaga} from "./servicesList";
import {serviceDetailSaga} from "./serviceDetail";

export function* rootSaga() {
    yield fork(serviceListSaga);
    yield fork(serviceDetailSaga);
}