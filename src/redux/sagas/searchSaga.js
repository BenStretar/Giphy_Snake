import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* search(){
    try {
        const getResponse = yield axios.get(`/api/giphy/search/${action.payload}`);
        yield put({ type: 'SET_SEARCH', payload: getResponse.data})
    }
    catch (error) {
        console.log(error)
    }
}

function* searchSaga(){
    yield takeLatest('GET_SEARCH', search)
}

export default searchSaga;