import { ActionTypes, ITransactionItem } from '../types';

/** Add Transaction */
export function addTransactionRequest(
   transaction: Omit<ITransactionItem, 'id'>
) {
   return {
      type: ActionTypes.addTransactionRequest,
      payload: {
         transaction,
      },
      loading: true,
   };
}

export function addTransactionSuccess(
   transaction: Omit<ITransactionItem, 'id'>
) {
   return {
      type: ActionTypes.addTransactionSuccess,
      payload: {
         transaction,
      },
      loading: false,
   };
}

export function addTransactionFailure(
   transactionId: Pick<ITransactionItem, 'id'>
) {
   return {
      type: ActionTypes.addTransactionFailure,
      payload: {
         transactionId,
      },
      loading: false,
   };
}
