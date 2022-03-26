import { Controller, useForm } from 'react-hook-form';
import { Form } from './styles';
/** datepicker */
import DatePicker from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import { useCallback, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { ITransactionItem } from '../../store/modules/transaction/types';
import { addTransactionRequest } from '../../store/modules/transaction/post/actions';
import { updateTransactionRequest } from '../../store/modules/transaction/patch/actions';
import NumberFormat from 'react-number-format';
import { IState } from '../../store';

registerLocale('pt-BR', ptBR);

interface IAddTransactionProps {
   onCloseModal: () => void;
   editTranscation?: ITransactionItem;
}

export function TransactionForm({
   onCloseModal,
   editTranscation,
}: IAddTransactionProps) {
   const dispatch = useDispatch();
   const [date, setDate] = useState(new Date());
   const [isEditing, setIsEditing] = useState(false);

   const transactionLoading = useSelector<IState, boolean>(
      (state) => state.transaction.loading
   );

   const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
      control,
   } = useForm();

   useEffect(() => {
      if (editTranscation) {
         setIsEditing(true);
         setValue('id', editTranscation.id);
         setValue('type', editTranscation.type);
         setValue('description', editTranscation.description);
         setValue('value', editTranscation.value);
         setValue('date', editTranscation.date);
      }
   }, [editTranscation, setValue]);

   const handleAddTransaction = useCallback(
      (transaction: Omit<ITransactionItem, 'id'>) => {
         dispatch(addTransactionRequest(transaction));
      },
      [dispatch]
   );

   const handleEditTransaction = (transaction: ITransactionItem) => {
      if (editTranscation) {
         dispatch(
            updateTransactionRequest({
               ...transaction,
               id: editTranscation.id,
            })
         );
      }
   };

   const onSubmit = ({ description, value, type }: any) => {
      const oldDate = date;
      const newDate = format(oldDate, 'dd/MM/yyyy');
      const valueString = value.toString();
      const valueReplaced = valueString.replace(',', '.');
      const newValue = Number.parseFloat(valueReplaced);

      const data = {
         id: editTranscation ? editTranscation.id : '',
         description,
         value: newValue,
         type,
         date: newDate,
      };

      isEditing ? handleEditTransaction(data) : handleAddTransaction(data);

      onCloseModal();
   };

   return (
      <>
         <Form
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            id="hook-form"
         >
            <h2>{isEditing ? 'Editar transação' : 'Cadastrar transação'}</h2>

            <select defaultValue={'expense'} {...register('type')}>
               <option value="income">Receita</option>
               <option value="expense">Despesa</option>
            </select>

            <input
               placeholder="Descrição"
               {...register('description', { required: true })}
            />
            {errors.description && <p>Preencha a descrição.</p>}

            <Controller
               name={'value'}
               control={control}
               rules={{ required: true }}
               render={({ field: { onChange, onBlur, name, value, ref } }) => (
                  <NumberFormat
                     allowNegative={false}
                     onValueChange={(values) => onChange(values.floatValue)}
                     prefix="R$"
                     name={name}
                     value={value}
                     onBlur={onBlur}
                     ref={ref}
                     placeholder="R$ 0,00"
                     decimalScale={2}
                     decimalSeparator=","
                     thousandSeparator="."
                     fixedDecimalScale
                  />
               )}
            />
            {errors.value && <p>Preencha o valor.</p>}

            <DatePicker
               locale="pt-BR"
               selected={date}
               onChange={(date: Date) => setDate(date)}
               dateFormat="P"
            />
            {errors.date && <p>Escolha uma data.</p>}

            <button type="submit" form="hook-form">
               {isEditing ? 'Salvar' : 'Cadastrar'}
            </button>
         </Form>
      </>
   );
}
