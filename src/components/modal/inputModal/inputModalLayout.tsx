import S from '@/components/modal/inputModal/inputModalLayout.module.css';
import { ReactNode } from 'react';

interface InputModalProps {
  title: string;
  children: ReactNode;
}

// 모달 내부 제목 + form(children) 구성 레이아웃
function InputModalLayout({ children, title }: InputModalProps) {
  return (
    <div className={S.inputModalMainContainer}>
      <div className={S.modalTitle}>{title}</div>
      <div className={S.modalContent}>{children}</div>
    </div>
  );
}

export default InputModalLayout;
