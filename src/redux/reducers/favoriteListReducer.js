// import favoriteReducer from "./favoriteReducer"

const favoriteListReducer =(state=[], action) =>{
    switch (action.payload){
        case 'SET_FAVORITE_LIST':
            return action.payload
        default:
            return state
    }
}

export default favoriteListReducer;