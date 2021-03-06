import { ActionTypes, ITransactionItem } from '../types';

/** Get Transaction */
export function getTransactionRequest() {
   return {
      type: ActionTypes.getTransactionRequest,
      loading: true,
      error: false,
   };
}

export function getTransactionSuccess(transaction: ITransactionItem) {
   return {
      type: ActionTypes.getTransactionSuccess,
      payload: transaction,
      loading: false,
      error: false,
   };
}

export function getTransactionFailure() {
   return {
      type: ActionTypes.getTransactionFailure,
      loading: false,
      error: true,
   };
}
