/** summary */
export enum ActionTypes {
   getSummaryIncomeRequest = 'GET_SUMMARY_INCOME_REQUEST',
   getSummaryIncomeSuccess = 'GET_SUMMARY_INCOME_SUCCESS',
   getSummaryIncomeFailure = 'GET_SUMMARY_INCOME_FAILURE',

   getSummaryExpenseRequest = 'GET_SUMMARY_EXPENSE_REQUEST',
   getSummaryExpenseSuccess = 'GET_SUMMARY_EXPENSE_SUCCESS',
   getSummaryExpenseFailure = 'GET_SUMMARY_EXPENSE_FAILURE',
}

export interface ISummaryExpenseIncome {
   type: string;
   _sum: {
      value: number;
   };
}

export interface ISummaryStateExpenseIncome {
   data: ISummaryExpenseIncome[];
   loading: boolean;
   error: boolean;
}
