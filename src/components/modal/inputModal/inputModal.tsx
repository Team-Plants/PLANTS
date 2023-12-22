import { ReactNode } from 'react';
import ModalLayout from '../modalLayout';
import InputModalLayout from './inputModalLayout';

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
