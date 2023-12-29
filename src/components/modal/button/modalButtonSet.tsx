import CommonStyle from '@/components/modal/modalCommon.module.css';
import ModalDefaultButton from '@/components/modal/button/modalDefaultButton';

interface ModalButtonSetState {
  isDelete: boolean;
  submitButtonTitle: '생성' | '변경' | '삭제' | '확인' | '수정';
  onClickCancel: () => void;
}

// 모달에서 사용하는 기본 버튼 세트
// 취소, 확인버튼 세트 (+ 삭제하기)
// isDelete: true -> 칼럼관리 모달 내 삭제하기 버튼
// onClickCancel -> 취소 버튼 클릭 시 이벤트
function ModalButtonSet({
  isDelete,
  submitButtonTitle = '확인',
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
          {submitButtonTitle}
        </ModalDefaultButton>
      </div>
    </div>
  );
}

export default ModalButtonSet;
