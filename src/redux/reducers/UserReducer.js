const initialState = {
    userDetail: {},
};
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DETAIL':
            return { ...state, userDetail: action.payload };
        case 'SET_CHAT_TO_USER':
            return { ...state, chatToUserId: action.payload };
        default:
            break;
    }
    return state;
}

export default UserReducer;
