import { showSnack, dismissSnack } from 'react-redux-snackbar';
export const showSnackbar = (id, message) => {
    return (dispatch) => {
        dispatch(showSnack(id, {
            label: message,
            timeout: 2000,
        }));
    }
}

export const setChatToUser = (toUserId) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_CHAT_TO_USER',
            payload: toUserId,
        })
    }
}