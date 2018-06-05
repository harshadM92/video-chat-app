const initialState = {
    messages: [],
};
const VideoChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PUSH_TO_MESSAGES':
            return { ...state, messages: [...state.messages, action.payload] };
        default:
            break;
    }
    return state;
}

export default VideoChatReducer;
