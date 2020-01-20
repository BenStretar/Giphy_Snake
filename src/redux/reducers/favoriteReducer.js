const favoriteReducer = (state={title: 'DEFAULT', url: ''}, action) => {
    console.log(action.payload)
    switch(action.payload){
        case 'SELECT_IMAGE':
            return action.payload
        default:
            return state
    }
}

export default favoriteReducer;