import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { IState } from '../../store';
import { getSummaryExpenseRequest } from '../../store/modules/summary/expense/actions';
import { getSummaryIncomeRequest } from '../../store/modules/summary/income/actions';
import { ISummaryExpenseIncome } from '../../store/modules/summary/types';
import { formatToBRL } from '../../util/appUtils';
import { Container } from './styles';

export function Summary() {
   const dispatch = useDispatch();
   const [totalSummary, setTotalSummary] = useState(0);
   const [showCardWarningExpense, setShowCardWarningExpense] = useState(false);

   const summaryExpenseData = useSelector<IState, ISummaryExpenseIncome[]>(
      (state) => state.summaryExpense.data.sort()
   );
   const summaryIncomeData = useSelector<IState, ISummaryExpenseIncome[]>(
      (state: IState) => state.summaryIncome.data
   );

   const getExpenseTotal = useCallback(() => {
      dispatch(getSummaryExpenseRequest());
   }, [dispatch]);

   const getIncomeTotal = useCallback(() => {
      dispatch(getSummaryIncomeRequest('lguilherme44@gmail.com'));
   }, [dispatch]);

   useEffect(() => {
      getExpenseTotal();
      getIncomeTotal();
   }, [getExpenseTotal, getIncomeTotal]);

   useEffect(() => {
      const expense = summaryExpenseData[0]?._sum?.value;
      const income = summaryIncomeData[0]?._sum?.value;

      setTotalSummary(Number(income - expense));

      if (Number(expense > income)) {
         setShowCardWarningExpense(true);
      }

      return () => setShowCardWarningExpense(false);
   }, [summaryExpenseData, summaryIncomeData]);

   return (
      <Container>
         <div>
            <header>
               <p>Entradas</p>
               <img src={incomeImg} alt="Entradas" />
            </header>

            <strong>{formatToBRL(summaryIncomeData[0]?._sum?.value)}</strong>
         </div>

         <div>
            <header>
               <p>Saídas</p>
               <img src={outcomeImg} alt="Saidas" />
            </header>
            <strong>{formatToBRL(summaryExpenseData[0]?._sum?.value)}</strong>
         </div>

         <div
            className={
               showCardWarningExpense
                  ? 'warning-background'
                  : 'highlight-background'
            }
         >
            <header>
               <p>Saldo Geral</p>
               <img src={totalImg} alt="Total" />
            </header>
            <strong>{formatToBRL(totalSummary)}</strong>
         </div>
      </Container>
   );
}
