import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* favoriteList(action){
    try {
        const getResponse = yield axios.get('/api/giphy');
        yield put({type: 'SET_FAVORITE_LIST', payload: getResponse.data});
      }
      catch (error) {
        console.log('Error getting favorite list:',error);    
      } 
}

function* getFavoriteList(){
    yield takeLatest('GET_FAVORITE_LIST', favoriteList)
}

export default getFavoriteList;