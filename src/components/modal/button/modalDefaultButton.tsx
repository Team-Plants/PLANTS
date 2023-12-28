import S from '@/components/modal/button/modalDefaultButton.module.css';
import { ReactNode } from 'react';

interface ModalDefaultButtonProps {
  children: ReactNode;
  type?: 'submit' | 'button';
  onClick?: () => void;
  isButtonActive?: boolean;
}

// 모달에서 사용하는 기본 버튼
function ModalDefaultButton({
  children,
  type = 'button',
  onClick,
  isButtonActive = false,
}: ModalDefaultButtonProps) {
  return (
    <button
      className={
        type === 'submit' ? S.violetButtonContainer : S.buttonContainer
      }
      type={type}
      onClick={onClick}
      disabled={isButtonActive}>
      <div className={S.buttonTitle}>{children}</div>
    </button>
  );
}

export default ModalDefaultButton;
