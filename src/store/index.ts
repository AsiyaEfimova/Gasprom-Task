import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { rootSaga } from '../modules/rootSaga';
import ListReducer from '../modules/servicesList';
import DetailReducer from '../modules/serviceDetail';

const sagaMiddleware = createSagaMiddleWare();

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
    DetailReducer: {
        serviceDetail:null,
        isLoading:false,
        error:null
    },
    ListReducer: {
        servicesList: [],
        isLoading:false,
        error:null
    }
};

const createServicesStore = () => {
    const store = createStore(
        combineReducers({
            ListReducer,
            DetailReducer
        }),
        initialState,
        compose(
            applyMiddleware(sagaMiddleware),
            composeEnhancers()
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

export default createServicesStore;