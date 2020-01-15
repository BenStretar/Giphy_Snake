
const searchReducer = (state=[], action) => {
    if (action.type === 'GET_SEARCH'){
        return action.payload;
    }
    return state;
}

export default searchReducer;