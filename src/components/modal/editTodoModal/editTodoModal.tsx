import { putCard } from '@/api/card';
import ModalButtonSet from '@/components/modal/button/modalButtonSet';
import S from '@/components/modal/editTodoModal/editTodoModal.module.css';
import DefaultInput from '@/components/modal/input/defaultInput/defaultInput';
import ImgInput from '@/components/modal/input/imgInput/imgInput';
import InputLayout from '@/components/modal/input/inputLayout';
import SelectInput from '@/components/modal/input/selectInput/selectInput';
import TagInput from '@/components/modal/input/tagInput/tagInput';
import InputModalLayout from '@/components/modal/inputModal/inputModalLayout';
import CommonStyle from '@/components/modal/modalCommon.module.css';
import ModalLayout from '@/components/modal/modalLayout';
import TextArea from '@/components/modal/textarea/textarea';
import { CardData } from '@/types/Card';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

interface AddTodoModalProps {
  onClick: () => void;
  state: boolean;
  cardId: number;
  data: CardData;
}

export type StatusType = 'ToDo' | 'On Progress' | 'Done';

interface StateOptions {
  value: StatusType;
  label: StatusType;
}

const stateOptions: StateOptions[] = [
  { value: 'ToDo', label: 'ToDo' },
  { value: 'On Progress', label: 'On Progress' },
  { value: 'Done', label: 'Done' },
];

function EditTodoModal({ onClick, state, cardId, data }: AddTodoModalProps) {
  const ManagerOptions = [
    { value: data.assignee.nickname, label: data.assignee.nickname },
  ];

  const methods = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      manager: data?.assignee.nickname,
      title: data?.title,
      description: data?.description,
      dueDate: data?.dueDate,
      tags: [data?.tags],
      imageUrl: data?.imageUrl,
    },
  });

  const { handleSubmit, control, setValue } = methods;
  const [isOpenState, setIsOpenState] = useState<boolean>(state);

  function handleEditTodo(data: FieldValues) {
    const newData: CardData = {
      id: data.id,
      assignee: data.assignee,
      dashboardId: data.dashboardId,
      columnId: data.columnId,
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      tags: data.tags,
      imageUrl: data.imageUrl,
    };

    if (confirm('해당 카드를 수정하시겠습니까?')) {
      putCard(cardId, newData);
    }
  }

  return (
    <ModalLayout
      onClick={() => {
        setIsOpenState(!false);
      }}
      isOpen={isOpenState}>
      <InputModalLayout title="할 일 수정">
        <form
          className={CommonStyle.form}
          onSubmit={handleSubmit(handleEditTodo)}>
          <div className={S.inputContainer}>
            <InputLayout label="상태" isNecessary={false}>
              <SelectInput
                optionData={stateOptions}
                type="state"
                placeholder="상태를 입력해주세요"
                setValue={setValue}
              />
            </InputLayout>
            <InputLayout label="담당자" isNecessary={false}>
              <SelectInput
                optionData={ManagerOptions}
                type="manager"
                placeholder="이름을 입력해주세요"
                setValue={setValue}
              />
            </InputLayout>
          </div>

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
              name="description"
            />
          </InputLayout>
          <InputLayout label="마감일" isNecessary={false}>
            <DefaultInput
              placeholder="설명을 입력해 주세요"
              type="date"
              control={control}
              name="dueDate"
            />
          </InputLayout>
          <InputLayout label="태그" isNecessary={false}>
            <TagInput setValue={setValue} control={control} name="tags" />
          </InputLayout>
          <InputLayout label="이미지" isNecessary={false}>
            <ImgInput control={control} name="imageUrl" setValue={setValue} />
          </InputLayout>

          <ModalButtonSet
            isDelete={false}
            submitButtonTitle="수정"
            onClickCancel={onClick}
            onClickSubmit={handleEditTodo}
          />
        </form>
      </InputModalLayout>
    </ModalLayout>
  );
}

export default EditTodoModal;
