import { ActionTypes, ITransactionItem } from '../types';

/** Delete Transaction */
export function deleteTransactionRequest(id: string) {
   return {
      type: ActionTypes.deleteTransactionRequest,
      payload: {
         id,
      },
   };
}

export function deleteTransactionSuccess() {
   return {
      type: ActionTypes.deleteTransactionSuccess,
   };
}

export function deleteTransactionFailure(
   transactionId: Pick<ITransactionItem, 'id'>
) {
   return {
      type: ActionTypes.deleteTransactionFailure,
      payload: {
         transactionId,
      },
   };
}
