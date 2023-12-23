import S from '@/components/modal/alertModal/alertModal.module.css';
import { ReactNode } from 'react';
import ModalLayout from '@/components/modal/modalLayout';
import CommonStyle from '@/components/modal/modalCommon.module.css';

interface alertModalProp {
  children: ReactNode;
  buttonItem: ReactNode;
  onClick: () => void;
}

// 단순 알림 및 버튼 모달(예, 비밀 번호가 일치 하지 않습니다. 칼럼의 모든 카드가 삭제됩니다. 등)
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
