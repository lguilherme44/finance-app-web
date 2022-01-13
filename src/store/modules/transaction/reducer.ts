import { Reducer } from 'redux';
import { ActionTypes, ITransactionState } from './types';
import produce from 'immer';

const INITIAL_STATE: ITransactionState = {
   data: [],
   loading: false,
   error: false,
};

const transaction: Reducer<ITransactionState> = (
   state = INITIAL_STATE,
   action
) => {
   return produce(state, (draft) => {
      switch (action.type) {
         case ActionTypes.addTransactionSuccess:
            draft.data.push(action.payload.transaction);
            break;

         case ActionTypes.getTransactionSuccess: {
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

export default transaction;
