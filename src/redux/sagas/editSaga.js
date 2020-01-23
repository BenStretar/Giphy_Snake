import axios from 'axios';
import {takeLatest} from 'redux-saga/effects';

function* editTitle(action){
    let id = action.payload.id
    try {
        yield axios.put(`/api/addGif/${id}`, action.payload);
    } 
    catch (error) {
        console.log(error)
    }
}

function* editSaga(){
    yield takeLatest('EDIT_TITLE', editTitle)
}

export default editSaga;