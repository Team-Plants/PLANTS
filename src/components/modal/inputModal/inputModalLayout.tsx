import S from '@/components/modal/inputModal/inputModalLayout.module.css';
import { ReactNode } from 'react';

interface InputModalProps {
  title: string;
  children: ReactNode;
  buttonItem: ReactNode;
}

function InputModalLayout({ children, buttonItem, title }: InputModalProps) {
  return (
    <div className={S.inputModalMainContainer}>
      <div className={S.modalTitle}>{title}</div>
      <div className={S.modalContent}>{children}</div>
      {buttonItem}
    </div>
  );
}

export default InputModalLayout;
