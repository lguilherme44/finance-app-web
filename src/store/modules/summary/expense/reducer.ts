import { Reducer } from 'redux';
import { ActionTypes, ISummaryStateExpenseIncome } from '../types';
import produce from 'immer';

const INITIAL_STATE: ISummaryStateExpenseIncome = {
   data: [],
   loading: false,
   error: false,
};

const summaryExpense: Reducer<ISummaryStateExpenseIncome> = (
   state = INITIAL_STATE,
   action
) => {
   return produce(state, (draft) => {
      switch (action.type) {
         case ActionTypes.getSummaryExpenseSuccess: {
            return {
               ...state,
               data: action.payload,
            };
         }
         default: {
            return draft;
         }
      }
   });
};

export default summaryExpense;
