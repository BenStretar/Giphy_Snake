const userGifReducer =(state=[], action) =>{
    switch (action.type){ 
        case 'SET_USER_GIF': 
            return action.payload
        default: 
            return state;
    }
}

export default userGifReducer;