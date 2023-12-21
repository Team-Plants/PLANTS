import ModalDefaultButton from '../button/modalDefaultButton';
import DefaultInput from '../input/defaultInput/defaultInput';
import InputLayout from '../input/inputLayout';
import TagInput from '../input/tagInput/tagInput';
import InputModal from '../inputModal/inputModal';
import ModalLayout from '../modalLayout';
import S from '@/components/modal/inputModal/inputModal.module.css';

interface AddTodoModalProps {
  onClick: () => void;
}

function AddTodoModal({ onClick }: AddTodoModalProps) {
  return (
    <ModalLayout onClick={onClick}>
      <InputModal
        title="새 컬럼 생성"
        buttonItem={
          <>
            <ModalDefaultButton type="default" onClick={onClick}>
              취소
            </ModalDefaultButton>
            <ModalDefaultButton type="violet" onClick={onClick}>
              확인
            </ModalDefaultButton>
          </>
        }>
        <form className={S.form}>
          <InputLayout label="제목" isNessary={true}>
            <DefaultInput placeholder="제목을 입력해 주세요" />
          </InputLayout>
          <InputLayout label="설명" isNessary={true}>
            <DefaultInput placeholder="설명을 입력해 주세요" />
          </InputLayout>
          <InputLayout label="태그" isNessary={false}>
            <TagInput />
          </InputLayout>
        </form>
      </InputModal>
    </ModalLayout>
  );
}

export default AddTodoModal;
