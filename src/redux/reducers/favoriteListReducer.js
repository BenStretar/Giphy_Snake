const favoriteListReducer =(state=[], action) =>{
    switch (action.type){ 
        case 'SET_FAVORITE_LIST': return action.payload
        default: return state;
    }
}

export default favoriteListReducer;