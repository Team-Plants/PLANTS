import DefaultInput from '../input/defaultInput/defaultInput';
import InputLayout from '../input/inputLayout';
import TagInput from '../input/tagInput/tagInput';
import InputModalLayout from '../inputModal/inputModalLayout';
import ModalLayout from '../modalLayout';
import CommonStyle from '@/components/modal/modalCommon.module.css';
import TextArea from '../textarea/textarea';
import SelectInput from '../input/selectInput/selectInput';
import ImgInput from '../input/imgInput/imgInput';
import { FieldValues, useForm } from 'react-hook-form';
import ModalButtonSet from '../button/modalButtonSet';

interface AddTodoModalProps {
  onClick: () => void;
}

const ManagerOptions = [
  { value: '배유철', label: '배유철' },
  { value: '배동석', label: '배동석' },
  { value: '배유철1', label: '배유철1' },
];

// 할 일 생성 모달
function AddTodoModal({ onClick }: AddTodoModalProps) {
  const methods = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      manager: '',
      title: '',
      explain: '',
      date: '',
      tag: [],
      img: '',
    },
  });

  const { handleSubmit, control, setValue } = methods;

  function handleAddTodo(data: FieldValues) {
    // 구현 필요
    console.log(data);
  }

  return (
    <ModalLayout onClick={onClick}>
      <InputModalLayout title="할 일 생성">
        <form
          className={CommonStyle.form}
          onSubmit={handleSubmit(handleAddTodo)}>
          <InputLayout label="담당자" isNecessary={false}>
            <SelectInput
              optionData={ManagerOptions}
              type="manager"
              placeholder="이름을 입력해주세요"
              setValue={setValue}
            />
          </InputLayout>
          <InputLayout label="제목" isNecessary={true}>
            <DefaultInput
              placeholder="제목을 입력해 주세요"
              control={control}
              name="title"
            />
          </InputLayout>
          <InputLayout label="설명" isNecessary={true}>
            <TextArea
              placeholder="설명을 입력해 주세요"
              control={control}
              name="explain"
            />
          </InputLayout>
          <InputLayout label="마감일" isNecessary={false}>
            <DefaultInput
              placeholder="설명을 입력해 주세요"
              type="date"
              control={control}
              name="date"
            />
          </InputLayout>
          <InputLayout label="태그" isNecessary={false}>
            <TagInput setValue={setValue} control={control} name="tag" />
          </InputLayout>
          <InputLayout label="이미지" isNecessary={false}>
            <ImgInput control={control} name="img" setValue={setValue} />
          </InputLayout>
          <ModalButtonSet
            isDelete={false}
            submitmButtonTitle="생성"
            onClickCancel={onClick}
          />
        </form>
      </InputModalLayout>
    </ModalLayout>
  );
}

export default AddTodoModal;
