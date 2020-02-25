import { takeLatest, call, put } from 'redux-saga/effects';
import {fetchServiceDetailRequest, fetchServiceDetailSuccess, fetchServiceDetailFailure} from './actions';
import {fetchItem, IServicesItem} from '../../api';

export function* fetchServiceDetailWorker (action: any){
    try {
        const response:IServicesItem[] = yield call(fetchItem, action.payload);
        yield put(fetchServiceDetailSuccess(response));
    } catch (error) {
        console.log(error);
        yield put(fetchServiceDetailFailure(error));
    }
}

export function* serviceDetailSaga (){
    yield takeLatest(fetchServiceDetailRequest, fetchServiceDetailWorker);
}