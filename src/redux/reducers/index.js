import { combineReducers } from 'redux';
import { snackbarReducer } from 'react-redux-snackbar';
import VideoChatReducer from './VideoChatReducer';
import CommonReducer from './commonReducer';
import UserReducer from './UserReducer';

const CombineReducer = combineReducers({
    chat: VideoChatReducer,
    common: CommonReducer,
    user: UserReducer,
    snackbar: snackbarReducer,
});

export default CombineReducer;
