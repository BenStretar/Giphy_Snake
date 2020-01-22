import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* score(action){
    try {
        const getResponse = yield axios.get('/api/score');
        yield put({type: 'SET_SCORE', payload: getResponse.data});
      }
      catch (error) {
        console.log('Error getting score: ',error);    
      } 
}

function* addScore(){
    yield takeLatest('GET_SCORE', score)
}

export default addScore;