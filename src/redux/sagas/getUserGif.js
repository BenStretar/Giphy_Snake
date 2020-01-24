import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* userGifSee(action){
    try {
        yield axios.get('/api/userGif', action.payload);
        yield put({type: 'SET_USER_GIF'})
    } 
    catch (error) {
        console.log(error)
    }
}

function* getUserGif(){
    yield takeLatest('GET_USER_GIF', userGifSee)
}

export default getUserGif;