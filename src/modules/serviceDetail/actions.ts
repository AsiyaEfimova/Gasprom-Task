import { createAction } from 'redux-actions';

export const fetchServiceDetailRequest = createAction('FETCH_SERVICEDETAIL_REQUEST');
export const fetchServiceDetailSuccess = createAction('FETCH_SERVICEDETAIL_SUCCESS');
export const fetchServiceDetailFailure = createAction('FETCH_SERVICEDETAIL_FAILURE');