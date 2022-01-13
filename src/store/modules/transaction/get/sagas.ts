import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../../../services/api';
import { ActionTypes, ITransactionItem } from '../types';
import { getTransactionSuccess } from './actions';

function* getTransaction() {
   const response: AxiosResponse<ITransactionItem> = yield call(
      api.get,
      'transactions'
   );

   yield put(getTransactionSuccess(response.data));
}

export default all([
   takeLatest(ActionTypes.getTransactionRequest, getTransaction),
]);
