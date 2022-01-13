import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ITransactionState } from './modules/transaction/types';
import { ISummaryStateExpenseIncome } from './modules/summary/types';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

export interface IState {
   transaction: ITransactionState;
   summaryExpense: ISummaryStateExpenseIncome;
   summaryIncome: ISummaryStateExpenseIncome;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;
