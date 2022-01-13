import { ActionTypes, ISummaryStateExpenseIncome } from '../types';

/** Get Summary Expense */
export function getSummaryExpenseRequest() {
   return {
      type: ActionTypes.getSummaryExpenseRequest,
      loading: true,
      error: false,
   };
}

export function getSummaryExpenseSuccess(data: ISummaryStateExpenseIncome) {
   return {
      type: ActionTypes.getSummaryExpenseSuccess,
      payload: data,
      loading: true,
      error: false,
   };
}

export function getSummaryExpenseFailure() {
   return {
      type: ActionTypes.getSummaryExpenseFailure,
      loading: true,
      error: false,
   };
}
