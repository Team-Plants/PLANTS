import S from '@/components/modal/button/modalDefaultButton.module.css';
import { ReactNode } from 'react';

interface ModalDefaultButtonProps {
  children: ReactNode;
  type: 'default' | 'violet';
}

function ModalDefaultButton({ children, type }: ModalDefaultButtonProps) {
  return (
    <div
      className={
        type === 'violet' ? S.violetButtonContainer : S.buttonContainer
      }>
      <div className={S.buttonTitle}>{children}</div>
    </div>
  );
}

export default ModalDefaultButton;
