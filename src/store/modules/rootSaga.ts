import { all } from 'redux-saga/effects';

/** transaction */
import getTranscation from './transaction/get/sagas';
import postTranscation from './transaction/post/sagas';
import patchTranscation from './transaction/patch/sagas';
import deleteTranscation from './transaction/delete/sagas';

/** summary */
import getSummaryExpense from './summary/expense/sagas';
import getSummaryIncome from './summary/income/sagas';

export default function* rootSaga(): any {
   return yield all([
      /** transaction */
      getTranscation,
      postTranscation,
      patchTranscation,
      deleteTranscation,
      /** summary */
      getSummaryExpense,
      getSummaryIncome,
   ]);
}
