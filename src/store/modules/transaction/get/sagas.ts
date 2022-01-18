import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../../../services/api';
import { ActionTypes, ITransactionState } from '../types';
import { getTransactionSuccess } from './actions';

function* getTransaction() {
   const response: AxiosResponse<ITransactionState> = yield call(
      api.get,
      'transactions'
   );

   const newData = response.data.data;

   const data = newData.length > 0 ? response.data.data : [];

   response.data.data = data;

   yield put(getTransactionSuccess(response.data));
}

export default all([
   takeLatest(ActionTypes.getTransactionRequest, getTransaction),
]);
