import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../../../services/api';
import { getSummaryExpenseRequest } from '../../summary/expense/actions';
import { getSummaryIncomeRequest } from '../../summary/income/actions';
import { ActionTypes } from '../types';
import { addTransactionRequest, addTransactionSuccess } from './actions';

type addTransactionRequestProps = ReturnType<typeof addTransactionRequest>;

function* addTransaction({ payload }: addTransactionRequestProps) {
   const { transaction } = payload;

   const response: AxiosResponse = yield call(
      api.post,
      'transaction',
      transaction
   );

   yield put(addTransactionSuccess(response.data));
   yield put(getSummaryExpenseRequest());
   // yield put(getSummaryIncomeRequest());
}

export default all([
   takeLatest(ActionTypes.addTransactionRequest, addTransaction),
]);
