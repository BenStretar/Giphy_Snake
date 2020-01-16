import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* search(){
    try {
        const getResponse = yield axios.get(`/api/giphy/search/${action.payload}`);
        yield put({ type: 'GET_SEARCH', payload: getResponse.data})
    }
    catch (error) {
        console.log('error getting search:', error)
    }
}

function* searchSaga(){
    yield takeLatest('SEARCH_GIPHY', search)
}

export default searchSaga;