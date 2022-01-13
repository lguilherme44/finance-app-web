import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../../../services/api';
import { ActionTypes } from '../../summary/types';
import { ISummaryStateExpenseIncome } from '../types';
import { getSummaryIncomeSuccess } from './actions';

function* getSummaryIncome() {
   const response: AxiosResponse<ISummaryStateExpenseIncome> = yield call(
      api.get,
      'summary/income'
   );

   yield put(getSummaryIncomeSuccess(response.data));
}

export default all([
   takeLatest(ActionTypes.getSummaryIncomeRequest, getSummaryIncome),
]);
