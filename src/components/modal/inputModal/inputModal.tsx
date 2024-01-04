import { ReactNode } from 'react';
import ModalLayout from '@/components/modal/modalLayout';
import InputModalLayout from '@/components/modal/inputModal/inputModalLayout';

interface InputModalLayoutProps {
  onClick: () => void;
  children: ReactNode;
  title: string;
}

function InputModal({ onClick, children, title }: InputModalLayoutProps) {
  return (
    <ModalLayout onClick={onClick}>
      <InputModalLayout title={title}>{children}</InputModalLayout>
    </ModalLayout>
  );
}

export default InputModal;
