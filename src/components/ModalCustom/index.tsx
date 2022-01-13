import { ReactNode } from 'react';
import Modal from 'react-modal';
import closeImng from '../../assets/close.svg';

interface ModalCustomProps {
   isOpen: boolean;
   onRequestClose: () => void;
   children?: ReactNode;
}

export function ModalCustom({
   isOpen,
   onRequestClose,
   children,
}: ModalCustomProps) {
   return (
      <Modal
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         overlayClassName="react-modal-overlay"
         className="react-modal-content"
      >
         <button
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
         >
            <img src={closeImng} alt="Fechar modal" />
         </button>

         {children}
      </Modal>
   );
}
