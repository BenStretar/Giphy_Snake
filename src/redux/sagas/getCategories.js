import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* categories(action){
    try {
        const getResponse = yield axios.get('/api/category');
        yield put ({type: 'SET_CATEGORIES', payload: getResponse.data})
      }
      catch (error) {
        console.log('error on getting categories:',error);
      }
}

function* getCategories(){
    yield takeLatest('GET_CATEGORIES', categories)
}

export default getCategories;