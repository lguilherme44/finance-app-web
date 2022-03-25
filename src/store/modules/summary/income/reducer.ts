import { Reducer } from 'redux';
import { ActionTypes, ISummaryStateExpenseIncome } from '../types';
import produce from 'immer';

const INITIAL_STATE: ISummaryStateExpenseIncome = {
   data: [],
   loading: false,
   error: false,
};

const summaryIncome: Reducer<ISummaryStateExpenseIncome> = (
   state = INITIAL_STATE,
   action
) => {
   return produce(state, (draft) => {
      switch (action.type) {
         case ActionTypes.getSummaryExpenseRequest: {
            return {
               ...state,
               loading: true,
            };
         }
         case ActionTypes.getSummaryIncomeSuccess: {
            return {
               ...state,
               data: action.payload,
               loading: false,
            };
         }
         case ActionTypes.getSummaryIncomeFailure: {
            return {
               ...state,
               error: true,
            };
         }

         default: {
            return draft;
         }
      }
   });
};

export default summaryIncome;
