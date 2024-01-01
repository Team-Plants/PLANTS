import CommonStyle from '@/components/modal/modalCommon.module.css';
import ModalDefaultButton from '@/components/modal/button/modalDefaultButton';
import ModalCreateButton from '@/components/modal/button/modalCreateButton';

interface ModalButtonSetState {
  isDelete: boolean;
  submitButtonTitle: '생성' | '변경' | '삭제' | '확인' | '수정';
  onClickCancel: (id: number) => void;
  onClickDelete?: () => void;
  isActive?: boolean;
}

// 모달에서 사용하는 기본 버튼 세트
// 취소, 확인버튼 세트 (+ 삭제하기)
// isDelete: true -> 칼럼관리 모달 내 삭제하기 버튼
// onClickCancel -> 취소 버튼 클릭 시 이벤트
// isActive -> 생성하기 버튼 활성/비활성 관리할 상태값
function ActiveModalButtonSet({
  isDelete,
  submitButtonTitle = '확인',
  onClickCancel,
  onClickDelete,
  isActive,
}: ModalButtonSetState) {
  return (
    <div
      className={`${CommonStyle.modalButtonContainer} ${
        isDelete ? CommonStyle.isDeleteModalButtonContainer : ''
      }`}>
      {isDelete && (
        <button className={CommonStyle.deleteButton} onClick={onClickDelete}>
          삭제하기
        </button>
      )}
      <div className={CommonStyle.rightButtonContainer}>
        <ModalDefaultButton onClick={onClickCancel}>취소</ModalDefaultButton>
        <ModalCreateButton type="submit" isActive={isActive}>
          {submitButtonTitle}
        </ModalCreateButton>
      </div>
    </div>
  );
}

export default ActiveModalButtonSet;
