import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { routerMiddleware } from 'connected-react-router';

// import history from '../routes/history';
import rootReducer from './ducks';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// const middlewares = [sagaMiddleware, routerMiddleware(history)];
const middlewares = [sagaMiddleware];

// const store = createStore(rootReducer(history), applyMiddleware(...middlewares));
const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
