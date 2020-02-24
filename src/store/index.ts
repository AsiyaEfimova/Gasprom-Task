import { createStore, compose, applyMiddleware } from 'redux';
import servicesListReducer from '../modules/servicesList';
import createSagaMiddleWare from 'redux-saga';
import { rootSaga } from '../modules/rootSaga';

const sagaMiddleware = createSagaMiddleWare();

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
    servicesList: [],
    serviceDetail:null,
    isLoading:false,
    error:null
};

const createServicesStore = () => {
    const store = createStore(
        servicesListReducer,
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