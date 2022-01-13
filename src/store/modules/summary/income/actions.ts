import { ActionTypes, ISummaryStateExpenseIncome } from '../types';

/** Get Summary Income */
export function getSummaryIncomeRequest() {
   return {
      type: ActionTypes.getSummaryIncomeRequest,
      loading: true,
      error: false,
   };
}

export function getSummaryIncomeSuccess(data: ISummaryStateExpenseIncome) {
   return {
      type: ActionTypes.getSummaryIncomeSuccess,
      payload: data,
      loading: true,
      error: false,
   };
}

export function getSummaryIncomeFailure() {
   return {
      type: ActionTypes.getSummaryIncomeFailure,
      loading: true,
      error: false,
   };
}
