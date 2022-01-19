import { all, call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../../../services/api';
import { getSummaryExpenseRequest } from '../../summary/expense/actions';
import { getSummaryIncomeRequest } from '../../summary/income/actions';
import { getTransactionRequest } from '../get/actions';
import { ActionTypes } from '../types';
import { deleteTransactionRequest, deleteTransactionSuccess } from './actions';

type deleteTransactionRequestProps = ReturnType<
   typeof deleteTransactionRequest
>;

function* deleteTransaction({ payload }: deleteTransactionRequestProps) {
   const { id } = payload;

   yield call(api.delete, `transaction/${id}`);

   yield all([
      put(deleteTransactionSuccess()),
      put(getSummaryExpenseRequest()),
      // put(getSummaryIncomeRequest()),
      put(getTransactionRequest()),
   ]);
}

export default all([
   takeLatest(ActionTypes.deleteTransactionRequest, deleteTransaction),
]);
