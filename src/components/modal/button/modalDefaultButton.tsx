import S from '@/components/modal/button/modalDefaultButton.module.css';
import { ReactNode } from 'react';

interface ModalDefaultButtonProps {
  children: ReactNode;
  type?: 'submit' | 'button';
  onClick?: () => void;
}

function ModalDefaultButton({
  children,
  type = 'button',
  onClick,
}: ModalDefaultButtonProps) {
  return (
    <button
      className={
        type === 'submit' ? S.violetButtonContainer : S.buttonContainer
      }
      type={type}
      onClick={onClick}>
      <div className={S.buttonTitle}>{children}</div>
    </button>
  );
}

export default ModalDefaultButton;
