import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../../../services/api';
import { getSummaryExpenseRequest } from '../../summary/expense/actions';
import { getSummaryIncomeRequest } from '../../summary/income/actions';
import { getTransactionRequest } from '../get/actions';
import { ActionTypes, ITransactionItem } from '../types';
import { updateTransactionRequest, updateTransactionSuccess } from './actions';

type updatedTransactionRequest = ReturnType<typeof updateTransactionRequest>;

function* updateTransaction({ payload }: updatedTransactionRequest) {
   const { transaction } = payload;

   const response: AxiosResponse<ITransactionItem[]> = yield call(
      api.patch,
      `transaction/${transaction.id}`,
      transaction
   );

   yield put(updateTransactionSuccess({ ...response.data }));
   yield put(getTransactionRequest());
   yield put(getSummaryExpenseRequest());
   yield put(getSummaryIncomeRequest());
}

export default all([
   takeLatest(ActionTypes.updateTransactionRequest, updateTransaction),
]);
