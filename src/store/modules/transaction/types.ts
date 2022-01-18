export enum ActionTypes {
   /** transaction */
   getTransactionRequest = 'GET_TRANSACTION_REQUEST',
   getTransactionSuccess = 'GET_TRANSACTION_SUCCESS',
   getTransactionFailure = 'GET_TRANSACTION_FAILURE',

   addTransactionRequest = 'ADD_TRANSACTION_REQUEST',
   addTransactionSuccess = 'ADD_TRANSACTION_SUCCESS',
   addTransactionFailure = 'ADD_TRANSACTION_FAILURE',

   updateTransactionRequest = 'UPDATE_TRANSACTION_REQUEST',
   updateTransactionSuccess = 'UPDATE_TRANSACTION_SUCCESS',
   updateTransactionFailure = 'UPDATE_TRANSACTION_FAILURE',

   deleteTransactionRequest = 'DELETE_TRANSACTION_REQUEST',
   deleteTransactionSuccess = 'DELETE_TRANSACTION_SUCCESS',
   deleteTransactionFailure = 'DELETE_TRANSACTION_FAILURE',
}

export interface ITransactionItem {
   id: string;
   description: string;
   value: number;
   date: string;
   type: string;
}

export interface ITransactionState {
   data: ITransactionItem[];
   loading: boolean;
   loadingDeleteTransaction: boolean;
   error: boolean;
}
