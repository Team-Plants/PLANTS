import commonStyle from '@/components/modal/modalLayout.module.css';
import S from '@/components/modal/alertModal/alertModal.module.css';
import { ReactNode } from 'react';

interface alertModalProp {
  children: ReactNode;
  buttonItem: ReactNode;
}

function AlertModal({ children, buttonItem }: alertModalProp) {
  return (
    <div className={commonStyle.modalMainContainer}>
      <div className={S.modalContent}>{children}</div>
      <div className={S.modalButtonContainer}>{buttonItem}</div>
    </div>
  );
}

export default AlertModal;
