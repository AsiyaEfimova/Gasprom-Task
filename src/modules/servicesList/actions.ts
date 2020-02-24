import { createAction } from 'redux-actions';

export const fetchServiceListRequest = createAction('FETCH_SERVICELIST_REQUEST');
export const fetchServiceListSuccess = createAction('FETCH_SERVICELIST_SUCCESS');
export const fetchServiceListFailure = createAction('FETCH_SERVICELIST_FAILURE');