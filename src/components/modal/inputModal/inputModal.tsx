import { ReactNode } from 'react';
import ModalDefaultButton from '../button/modalDefaultButton';
import ModalLayout from '../modalLayout';
import InputModalLayout from './inputModalLayout';
import S from '@/components/modal/inputModal/inputModal.module.css';
import CommonStyle from '@/components/modal/modalCommon.module.css';

interface InputModalLayoutProps {
  onClick: () => void;
  children: ReactNode;
  title: string;
  isDelete: boolean;
}

function InputModal({
  onClick,
  children,
  title,
  isDelete,
}: InputModalLayoutProps) {
  return (
    <ModalLayout onClick={onClick}>
      <InputModalLayout
        title={title}
        buttonItem={
          <div
            className={`${CommonStyle.modalButtonContainer} ${
              isDelete ? CommonStyle.isDeleteModalButtonContainer : ''
            }`}>
            {isDelete && <div className={S.deleteButton}>삭제하기</div>}
            <div className={CommonStyle.rightButtonContainer}>
              <ModalDefaultButton type="default" onClick={onClick}>
                취소
              </ModalDefaultButton>
              <ModalDefaultButton type="violet" onClick={onClick}>
                확인
              </ModalDefaultButton>
            </div>
          </div>
        }>
        {children}
      </InputModalLayout>
    </ModalLayout>
  );
}

export default InputModal;
