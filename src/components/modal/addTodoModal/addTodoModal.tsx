import ModalDefaultButton from '../button/modalDefaultButton';
import DefaultInput from '../input/defaultInput/defaultInput';
import InputLayout from '../input/inputLayout';
import TagInput from '../input/tagInput/tagInput';
import InputModalLayout from '../inputModal/inputModalLayout';
import ModalLayout from '../modalLayout';
import S from '@/components/modal/inputModal/inputModalLayout.module.css';
import CommonStyle from '@/components/modal/modalCommon.module.css';
import TextArea from '../textarea/textarea';

interface AddTodoModalProps {
  onClick: () => void;
}

function AddTodoModal({ onClick }: AddTodoModalProps) {
  return (
    <ModalLayout onClick={onClick}>
      <InputModalLayout
        title="새 컬럼 생성"
        buttonItem={
          <div className={CommonStyle.modalButtonContainer}>
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
        <form className={S.form}>
          <InputLayout label="제목" isNessary={true}>
            <DefaultInput placeholder="제목을 입력해 주세요" />
          </InputLayout>
          <InputLayout label="설명" isNessary={true}>
            <TextArea />
          </InputLayout>
          <InputLayout label="마감일" isNessary={false}>
            <DefaultInput placeholder="설명을 입력해 주세요" type="date" />
          </InputLayout>
          <InputLayout label="태그" isNessary={false}>
            <TagInput />
          </InputLayout>
        </form>
      </InputModalLayout>
    </ModalLayout>
  );
}

export default AddTodoModal;
