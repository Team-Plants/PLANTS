import CommonStyle from '@/components/modal/modalCommon.module.css';
import ModalDefaultButton from './modalDefaultButton';

interface ModalButtonSetState {
  isDelete: boolean;
  submitmButtonTitle: '생성' | '변경' | '삭제' | '확인' | '수정';
  onClickCancel: () => void;
}

function ModalButtonSet({
  isDelete,
  submitmButtonTitle = '확인',
  onClickCancel,
}: ModalButtonSetState) {
  return (
    <div
      className={`${CommonStyle.modalButtonContainer} ${
        isDelete ? CommonStyle.isDeleteModalButtonContainer : ''
      }`}>
      {isDelete && <div className={CommonStyle.deleteButton}>삭제하기</div>}
      <div className={CommonStyle.rightButtonContainer}>
        <ModalDefaultButton onClick={onClickCancel}>취소</ModalDefaultButton>
        <ModalDefaultButton type="submit">
          {submitmButtonTitle}
        </ModalDefaultButton>
      </div>
    </div>
  );
}

export default ModalButtonSet;
