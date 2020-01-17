import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* newFavorite(action){
    try {
        yield axios.post('/api/addGif', action.payload);
        yield put({type: 'GET_FAVORITE_LIST'})
    } 
    catch (error) {
        console.log(error)
    }
}

function* addNewFavorite(){
    yield takeLatest('ADD_NEW_FAVORITE', newFavorite)
}

export default addNewFavorite;