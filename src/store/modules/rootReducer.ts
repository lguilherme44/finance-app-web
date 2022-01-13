import { combineReducers } from 'redux';
import transaction from './transaction/reducer';
import summaryExpense from './summary/expense/reducer';
import summaryIncome from './summary/income/reducer';

export default combineReducers({
   transaction,
   summaryExpense,
   summaryIncome,
});
