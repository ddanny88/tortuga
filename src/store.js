import { createStore, applyMiddleware } from 'redux';
import promiseMiddleWare from 'redux-promise-middleware';
import reducer from './ducks/reducer';

const middleware = applyMiddleware(promiseMiddleWare());

export default createStore(reducer, middleware);