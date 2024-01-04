import { postCard } from '@/api/card';
import { postColumnImage } from '@/api/column';
import { getMembers } from '@/api/member';
import ModalButtonSet from '@/components/modal/button/modalButtonSet';
import DefaultInput from '@/components/modal/input/defaultInput/defaultInput';
import ImgInput from '@/components/modal/input/imgInput/imgInput';
import InputLayout from '@/components/modal/input/inputLayout';
import SelectInput from '@/components/modal/input/selectInput/selectInput';
import TagInput from '@/components/modal/input/tagInput/tagInput';
import InputModalLayout from '@/components/modal/inputModal/inputModalLayout';
import CommonStyle from '@/components/modal/modalCommon.module.css';
import ModalLayout from '@/components/modal/modalLayout';
import TextArea from '@/components/modal/textarea/textarea';
import { MemberProps } from '@/types/Member';
import { dateFormat } from '@/utils/utility';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@/api/user';
import QUERY_KEYS from '@/constants/queryKeys';

interface AddTodoModalProps {
  onClick: () => void;
  columnId: number;
}

export interface DashBoardData {
  [key: string]: string | number;
}

export interface Option {
  value: string;
  label: string;
}

// 할 일 생성 모달
function AddTodoModal({ onClick, columnId }: AddTodoModalProps) {
  const methods = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      manager: '',
      title: '',
      description: '',
      dueDate: '',
      tags: [],
      imageUrl: '',
    },
  });

  const { handleSubmit, control, setValue, watch } = methods;
  const watchAll = Object.values(watch(['title', 'description'])); //필수항목, 두개만 채워지면 제출가능
  const [isButtonActive, setIsButtonActive] = useState(true);
  const [managers, SetManagers] = useState<Option[]>();
  const router = useRouter();
  const dashboardId = parseInt(router.asPath.split('/')[2]);

  const { data: userData } = useQuery<MemberProps>({
    queryKey: [QUERY_KEYS.user],
    queryFn: () => getUsers(),
  });

  async function getMembersData() {
    const response = await getMembers(String(dashboardId));
    const members = response.members;
    const filtered = members.map((member: MemberProps) => ({
      value: member.nickname,
      label: member.profileImageUrl,
    }));
    SetManagers(filtered);
  }

  async function handleAddTodo(data: FieldValues) {
    if (!userData) return;

    onClick();

    const newData: DashBoardData = {
      assigneeUserId: userData.id,
      dashboardId: dashboardId,
      columnId,
    };

    for (const key in data) {
      if (data[key].length) {
        newData[key] = data[key];
      }
    }

    if (data.dueDate) {
      const date = dateFormat(data.dueDate);
      newData.dueDate = date;
    }

    if (data.imageUrl) {
      const imgFormData = new FormData();
      imgFormData.append('image', data.imageUrl);
      const response = await postColumnImage(imgFormData, `${columnId}`);
      newData.imageUrl = response.imageUrl;
    }

    const response = await postCard(newData);
    console.log(response); //카드만들 데이터
  }

  useEffect(() => {
    getMembersData();
  }, []);

  useEffect(() => {
    if (watchAll.every((el) => el)) {
      setIsButtonActive(false);
    } else {
      setIsButtonActive(true);
    }
  }, [watchAll]);

  return (
    <ModalLayout onClick={onClick}>
      <InputModalLayout title="할 일 생성">
        <form
          className={CommonStyle.form}
          onSubmit={handleSubmit(handleAddTodo)}>
          <InputLayout label="담당자" isNecessary={false}>
            <SelectInput
              optionData={managers}
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
              name="description"
            />
          </InputLayout>
          <InputLayout label="마감일" isNecessary={false}>
            <DefaultInput
              placeholder="설명을 입력해 주세요"
              type="datetime-local"
              control={control}
              name="dueDate"
              isRequired={false}
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
            submitButtonTitle="생성"
            onClickCancel={onClick}
            isButtonActive={isButtonActive}
          />
        </form>
      </InputModalLayout>
    </ModalLayout>
  );
}

export default AddTodoModal;
