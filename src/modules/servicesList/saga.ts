import { takeLatest, call, put } from 'redux-saga/effects';
import {
    fetchServiceListRequest,
    fetchServiceListSuccess,
    fetchServiceListFailure
} from './actions';
import {fetchList, IServicesList} from '../../api';

export function* fetchServiceListWorker (action: any){
    try {
        const response:IServicesList[] = yield call(fetchList);
        yield put(fetchServiceListSuccess(response));
    } catch (error) {
        console.log(error);
        yield put(fetchServiceListFailure(error));
    }
}

export function* serviceListSaga (){
    yield takeLatest(fetchServiceListRequest, fetchServiceListWorker);
}