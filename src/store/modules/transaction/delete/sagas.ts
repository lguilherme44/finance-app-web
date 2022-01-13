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

   yield put(getTransactionRequest());
   yield put(deleteTransactionSuccess());
   yield put(getSummaryExpenseRequest());
   yield put(getSummaryIncomeRequest());
}

export default all([
   takeLatest(ActionTypes.deleteTransactionRequest, deleteTransaction),
]);
