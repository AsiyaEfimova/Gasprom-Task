import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {fetchServiceListRequest, fetchServiceListSuccess, fetchServiceListFailure} from './actions';

export const servicesList = handleActions({
    [fetchServiceListRequest.toString()]: () => [],
    [fetchServiceListSuccess.toString()]: (_state, action) => action.payload
}, []);
export const isLoading = handleActions({
    [fetchServiceListRequest.toString()]: ():boolean => true,
    [fetchServiceListSuccess.toString()]: ():boolean => false,
    [fetchServiceListFailure.toString()]: ():boolean => false
}, false);
export const error = handleActions({
    [fetchServiceListRequest.toString()]: () => null,
    [fetchServiceListFailure.toString()]: (_state, action) => {
        console.log(action.payload);
        return action.payload;
    }
}, null);

export default combineReducers({
    servicesList,
    isLoading,
    error
});