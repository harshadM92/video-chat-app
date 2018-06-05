const initialState = {
    title: '',
};
const CommonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TITLE':
            return { ...state, title: action.payload };
        default:
            break;
    }
    return state;
}

export default CommonReducer;
