export const pushToMessages = (message) => {
    return (dispatch) => {
        dispatch({
            type: 'PUSH_TO_MESSAGES',
            payload: message,
        });
    };
};
export const hello = '';
