import { useCallback, useContext, useEffect, useState } from 'react';
import { Container, ButtonCustom } from './styles';
import { MdEdit, MdDelete } from 'react-icons/md';
import { ITransactionItem } from '../../store/modules/transaction/types';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { ModalCustom } from '../ModalCustom';
import { TransactionForm } from '../TransactionForm';
import { deleteTransactionRequest } from '../../store/modules/transaction/delete/actions';
import { formatToBRL } from '../../util/appUtils';
import Spinner from '../Spinner';
import { getTransactionRequest } from '../../store/modules/transaction/get/actions';
import { AuthContext } from '../../contexts/auth';

export function TransactionsTable() {
   const dispatch = useDispatch();
   const { user } = useContext(AuthContext);
   const [showModal, setShowModal] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const transactionsData = useSelector<IState, ITransactionItem[]>(
      (state) => state.transaction.data
   );
   const transactionLoading = useSelector<IState, boolean>(
      (state) => state.transaction.loading
   );

   const deleteTransactionLoading = useSelector<IState, boolean>(
      (state) => state.transaction.loadingDeleteTransaction
   );

   const getTransactions = useCallback(() => {
      dispatch(getTransactionRequest());
   }, [dispatch]);

   useEffect(() => {
      getTransactions();
   }, [getTransactions, user]);

   useEffect(() => {
      if (transactionLoading || deleteTransactionLoading) {
         setIsLoading(true);
      }

      return () => setIsLoading(false);
   }, [transactionLoading, deleteTransactionLoading]);

   const [editTransaction, setEditTransaction] = useState<ITransactionItem>();
   return (
      <Container>
         <ModalCustom
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}
         >
            <TransactionForm
               onCloseModal={() => setShowModal(false)}
               editTranscation={editTransaction}
            />
         </ModalCustom>
         <div
            style={{
               overflowX: 'auto',
            }}
         >
            <table className="table-auto">
               <thead>
                  <tr className="header-table">
                     <th>Descri????o</th>
                     <th>Valor</th>
                     <th>Data</th>
                     <th>Op????es</th>
                  </tr>
               </thead>
               <tbody>
                  {isLoading && (
                     <div
                        style={{
                           display: 'flex',
                           justifyContent: 'center',
                           alignItems: 'center',
                           position: 'absolute',
                           left: 0,
                           right: 0,
                           top: 0,
                           bottom: 0,
                           backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                     >
                        <Spinner />
                     </div>
                  )}

                  {transactionsData?.length > 0 &&
                     transactionsData?.map((transaction, index) => (
                        <tr key={index}>
                           <td className={transaction.type}>
                              {transaction.description}
                           </td>
                           <td>{formatToBRL(transaction.value)}</td>
                           <td>{transaction.date}</td>
                           <td>
                              <ButtonCustom
                                 onClick={() => {
                                    setShowModal(true);
                                    setEditTransaction(transaction);
                                 }}
                              >
                                 <MdEdit color="#5429CC" />
                              </ButtonCustom>
                              <ButtonCustom
                                 onClick={() => {
                                    dispatch(
                                       deleteTransactionRequest(transaction.id)
                                    );
                                 }}
                              >
                                 <MdDelete color="#e52e4d" />
                              </ButtonCustom>
                           </td>
                        </tr>
                     ))}
               </tbody>
            </table>
         </div>
      </Container>
   );
}
