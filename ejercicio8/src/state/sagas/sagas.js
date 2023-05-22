import { takeLatest, call, put } from 'redux-saga/effects';
import { API_CALL_REQUEST } from '../actions/asyncActions';


export function* watcherSaga(){
    yield takeLatest(API_CALL_REQUEST, workerSaga)
}

export function* workerSaga(action){
    try {
        const response = yield call(fetchHttp(action.payload.request))
        const token = response.token; 
        yield put({
            type: action.payload.okAction,
            payload: {
                token: token
            }
        })
    } catch (err) {
        yield put({
            type: action.payload.failAction,
            payload: {
                error: err
            }
        })
    }
}
function fetchHttp(request){
  
    return  async function(){
        const req = await fetch(request.url,{
            method: request.method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request.data)
        })
        return req.json()    
    }
}