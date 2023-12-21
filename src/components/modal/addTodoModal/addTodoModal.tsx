import ModalDefaultButton from '../button/modalDefaultButton';
import DefaultInput from '../input/defaultInput/defaultInput';
import InputLayout from '../input/inputLayout';
import TagInput from '../input/tagInput/tagInput';
import InputModalLayout from '../inputModal/inputModalLayout';
import ModalLayout from '../modalLayout';
import S from '@/components/modal/inputModal/inputModalLayout.module.css';
import CommonStyle from '@/components/modal/modalCommon.module.css';
import TextArea from '../textarea/textarea';
import SelectInput from '../input/selectInput/selectInput';

interface AddTodoModalProps {
  onClick: () => void;
}

// const stateOptions = [
//   { value: 'To Do', label: 'To Do' },
//   { value: 'On Progress', label: 'On Progress' },
//   { value: 'Done', label: 'Done' },
// ];

const ManagerOptions = [
  { value: '배유철', label: '배유철' },
  { value: '배동석', label: '배동석' },
  { value: '배유철1', label: '배유철1' },
];

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
          <InputLayout label="담당자" isNessary={false}>
            <SelectInput
              optionData={ManagerOptions}
              type="manager"
              placeholder="이름을 입력해주세요"
            />
          </InputLayout>
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
