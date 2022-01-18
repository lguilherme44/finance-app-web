import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../../../services/api';
import { ActionTypes } from '../../summary/types';
import { ISummaryStateExpenseIncome } from '../types';
import { getSummaryExpenseSuccess } from './actions';

function* getSummaryExpense() {
   const response: AxiosResponse<ISummaryStateExpenseIncome> = yield call(
      api.get,
      'summary/expense'
   );

   const newData = response.data.data;

   const data = newData.length > 0 ? response.data.data : [];

   response.data.data = data;

   yield put(getSummaryExpenseSuccess(response.data));
}

export default all([
   takeLatest(ActionTypes.getSummaryExpenseRequest, getSummaryExpense),
]);
