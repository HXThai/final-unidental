import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Sagas/index';

import homeReducer from './Reducer/homeReducer';

const rootReducer = combineReducers({
  homeReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
