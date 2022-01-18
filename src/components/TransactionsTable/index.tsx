import { useState } from 'react';
import { Container, ButtonCustom } from './styles';
import { MdEdit, MdDelete } from 'react-icons/md';
import { ITransactionItem } from '../../store/modules/transaction/types';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { ModalCustom } from '../ModalCustom';
import { TransactionForm } from '../TransactionForm';
import { deleteTransactionRequest } from '../../store/modules/transaction/delete/actions';
import { formatToBRL } from '../../util/appUtils';

export function TransactionsTable() {
   const dispatch = useDispatch();
   const [showModal, setShowModal] = useState(false);
   const transactionsData = useSelector<IState, ITransactionItem[]>(
      (state) => state.transaction.data
   );

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
         <table>
            <thead>
               <tr className="header-table">
                  <th>Descrição</th>
                  <th>Valor</th>
                  <th>Data</th>
                  <th>Opções</th>
               </tr>
            </thead>
            <tbody>
               {transactionsData.length > 0 &&
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
      </Container>
   );
}
