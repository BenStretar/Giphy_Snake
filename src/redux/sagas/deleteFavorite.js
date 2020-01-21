import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* deleteItem(action){
    try {
        yield axios.delete('/api/addGif/'+ action.payload);
        yield put({type: 'GET_FAVORITE_LIST'})
    } 
    catch (error) {
        console.log(error)
    }
}

function* deleteFavorite(){
    yield takeLatest('DELETE_FAVORITE', deleteItem)
}

export default deleteFavorite;