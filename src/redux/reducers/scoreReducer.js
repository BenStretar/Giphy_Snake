const scoreReducer = (state=[], action) => {
    if (action.type === 'GET_SCORE'){
        return action.payload;
    }
    return state;
}

export default scoreReducer;