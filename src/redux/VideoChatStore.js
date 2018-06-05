import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import CombineReducer from './reducers/index';

const middleware = applyMiddleware(logger, thunk);

const VideoChatStore = createStore(CombineReducer, {}, middleware);

export default VideoChatStore;
