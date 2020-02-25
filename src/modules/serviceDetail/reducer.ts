import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {fetchServiceDetailRequest, fetchServiceDetailSuccess, fetchServiceDetailFailure} from './actions';

const serviceDetail = handleActions({
    [fetchServiceDetailRequest.toString()]: () => null,
    [fetchServiceDetailSuccess.toString()]: (_state, action) => action.payload
}, null);
const isLoading = handleActions({
    [fetchServiceDetailRequest.toString()]: ():boolean => true,
    [fetchServiceDetailSuccess.toString()]: ():boolean => false,
    [fetchServiceDetailFailure.toString()]: ():boolean => false
}, false);
const error = handleActions({
    [fetchServiceDetailRequest.toString()]: () => null,
    [fetchServiceDetailFailure.toString()]: (_state, action) => {
        console.log(action.payload);
        return action.payload;
    }
}, null);

export default combineReducers({
    serviceDetail,
    isLoading,
    error
});