import S from '@/components/modal/button/modalCreateButton.module.css';
import { ReactNode } from 'react';

interface ModalCreateButtonProps {
  children: ReactNode;
  type?: 'submit' | 'button';
  onClick?: () => void;
  isActive: boolean | undefined;
}

// 모달에서 사용하는 기본 버튼
function ModalCreateButton({
  children,
  type = 'button',
  onClick,
  isActive,
}: ModalCreateButtonProps) {
  return (
    <button
      className={isActive ? S.violetButtonContainer : S.disabledButtonContainer}
      type={type}
      onClick={onClick}
      disabled={isActive ? false : true}>
      <div className={S.buttonTitle}>{children}</div>
    </button>
  );
}

export default ModalCreateButton;
