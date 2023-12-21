import S from '@/components/modal/alertModal/alertModal.module.css';
import { ReactNode } from 'react';
import ModalLayout from '../modalLayout';
import CommonStyle from '@/components/modal/modalCommon.module.css';

interface alertModalProp {
  children: ReactNode;
  buttonItem: ReactNode;
  onClick: () => void;
}

function AlertModal({ children, buttonItem, onClick }: alertModalProp) {
  return (
    <ModalLayout onClick={onClick}>
      <div className={S.alertModalMainContainer}>
        <div className={S.modalContent}>{children}</div>
        <div className={CommonStyle.modalButtonContainer}>{buttonItem}</div>
      </div>
    </ModalLayout>
  );
}

export default AlertModal;
