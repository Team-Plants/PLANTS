import ModalDefaultButton from '@/components/modal/button/modalDefaultButton';
import DefaultInput from '@/components/modal/input/defaultInput/defaultInput';
import InputLayout from '@/components/modal/input/inputLayout';
import TagInput from '@/components/modal/input/tagInput/tagInput';
import InputModalLayout from '@/components/modal/inputModal/inputModalLayout';
import ModalLayout from '@/components/modal/modalLayout';
import S from '@/components/modal/editTodoModal/editTodoModal.module.css';
import CommonStyle from '@/components/modal/modalCommon.module.css';
import TextArea from '@/components/modal/textarea/textarea';
import SelectInput from '@/components/modal/input/selectInput/selectInput';
import ImgInput from '../input/imgInput/imgInput';
import { useState } from 'react';

interface AddTodoModalProps {
  onClick: () => void;
}

const stateOptions = [
  { value: 'To Do', label: 'To Do' },
  { value: 'On Progress', label: 'On Progress' },
  { value: 'Done', label: 'Done' },
];

const ManagerOptions = [
  { value: '배유철', label: '배유철' },
  { value: '배동석', label: '배동석' },
  { value: '배유철1', label: '배유철1' },
];

function EditTodoModal({ onClick }: AddTodoModalProps) {
  const [explain, setExplain] = useState('');

  return (
    <ModalLayout onClick={onClick}>
      <InputModalLayout
        title="할 일 수정"
        buttonItem={
          <div className={CommonStyle.modalButtonContainer}>
            <div className={CommonStyle.rightButtonContainer}>
              <ModalDefaultButton type="default" onClick={onClick}>
                취소
              </ModalDefaultButton>
              <ModalDefaultButton type="violet" onClick={onClick}>
                수정
              </ModalDefaultButton>
            </div>
          </div>
        }>
        <form className={CommonStyle.form}>
          <div className={S.inputContainer}>
            <InputLayout label="상태" isNessary={false}>
              <SelectInput
                optionData={stateOptions}
                type="state"
                placeholder="상태를 입력해주세요"
              />
            </InputLayout>
            <InputLayout label="담당자" isNessary={false}>
              <SelectInput
                optionData={ManagerOptions}
                type="manager"
                placeholder="이름을 입력해주세요"
              />
            </InputLayout>
          </div>

          <InputLayout label="제목" isNessary={true}>
            <DefaultInput placeholder="제목을 입력해 주세요" />
          </InputLayout>
          <InputLayout label="설명" isNessary={true}>
            <TextArea
              placeholder="설명을 입력해 주세요"
              value={explain}
              onChange={setExplain}
            />
          </InputLayout>
          <InputLayout label="마감일" isNessary={false}>
            <DefaultInput placeholder="설명을 입력해 주세요" type="date" />
          </InputLayout>
          <InputLayout label="태그" isNessary={false}>
            <TagInput />
          </InputLayout>
          <InputLayout label="태그" isNessary={false}>
            <ImgInput />
          </InputLayout>
        </form>
      </InputModalLayout>
    </ModalLayout>
  );
}

export default EditTodoModal;
