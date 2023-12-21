import S from '@/components/modal/inputModal/inputModal.module.css';
import alertModalStyle from '@/components/modal/alertModal/alertModal.module.css';
import { ReactNode } from 'react';

interface InputModalProps {
  title: string;
  children: ReactNode;
  buttonItem: ReactNode;
}

function InputModal({ children, buttonItem, title }: InputModalProps) {
  return (
    <div className={S.inputModalMainContainer}>
      <div className={S.modalTitle}>{title}</div>
      <div className={S.modalContent}>{children}</div>
      <div className={alertModalStyle.modalButtonContainer}>{buttonItem}</div>
    </div>
  );
}

export default InputModal;
