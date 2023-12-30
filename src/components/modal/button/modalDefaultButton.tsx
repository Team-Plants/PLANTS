import S from '@/components/modal/button/modalDefaultButton.module.css';
import { ReactNode } from 'react';
import { FieldValues } from 'react-hook-form';

interface ModalDefaultButtonProps {
  children: ReactNode;
  type?: 'submit' | 'button';
  onClick?: (data: FieldValues) => void;
}

// 모달에서 사용하는 기본 버튼
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
