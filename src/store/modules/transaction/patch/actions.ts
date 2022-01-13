import { ActionTypes, ITransactionItem } from '../types';

/** Update Transaction */
export function updateTransactionRequest(transaction: ITransactionItem) {
   return {
      type: ActionTypes.updateTransactionRequest,
      payload: {
         transaction,
      },
   };
}

export function updateTransactionSuccess(transaction: ITransactionItem[]) {
   return {
      type: ActionTypes.updateTransactionSuccess,
      payload: {
         transaction,
      },
   };
}

export function updateTransactionFailure(
   transactionId: Pick<ITransactionItem, 'id'>
) {
   return {
      type: ActionTypes.updateTransactionFailure,
      payload: {
         transactionId,
      },
   };
}
