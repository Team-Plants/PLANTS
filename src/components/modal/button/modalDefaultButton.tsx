import S from '@/components/modal/button/modalDefaultButton.module.css';
import { ReactNode } from 'react';

interface ModalDefaultButtonProps {
  children: ReactNode;
  type: 'default' | 'violet';
  onClick: () => void;
}

function ModalDefaultButton({
  children,
  type,
  onClick,
}: ModalDefaultButtonProps) {
  return (
    <div
      className={
        type === 'violet' ? S.violetButtonContainer : S.buttonContainer
      }
      onClick={onClick}>
      <div className={S.buttonTitle}>{children}</div>
    </div>
  );
}

export default ModalDefaultButton;
