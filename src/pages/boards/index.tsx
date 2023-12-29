/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import DashboardHeader from '@/components/header/dashboardHeader/dashboardHeader';
import SideMenu from '@/components/sideMenu/SideMenu';
import S from '@/pages/boards/boards.module.css';
import ColumnButton from '@/components/button/column/columnButton';
import AddTodoModal from '@/components/modal/addTodoModal/addTodoModal';
import InputModal from '@/components/modal/inputModal/inputModal';
import InputLayout from '@/components/modal/input/inputLayout';
import DefaultInput from '@/components/modal/input/defaultInput/defaultInput';
import ModalButtonSet from '@/components/modal/button/modalButtonSet';
import CommonStyle from '@/components/modal/modalCommon.module.css';
import { FieldValues, useForm } from 'react-hook-form';
import { postColumnAdd } from '@/api/column';
import { useQuery } from '@tanstack/react-query';
import QUERY_KEYS from '@/constants/queryKeys';
import Column from '@/components/column/column';

function boards() {
  const [mounted, setMounted] = useState(false);
  const [isOpenAddTodoModal, setIsOpenAddTodoModal] = useState(false);
  const [isOpenColumnModal, setIsOpenColumnModal] = useState(false);
  const [formData, setFormData] = useState({});

  const { error, refetch } = useQuery({
    queryKey: [QUERY_KEYS.columns],
    queryFn: () => postColumnAdd(formData),
    enabled: false,
  });

  const methods = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      title: '',
    },
  });

  const { handleSubmit, control, reset } = methods;

  function handleClick() {
    setIsOpenAddTodoModal((prev) => !prev);
  }

  function handleAddColumnModal() {
    setIsOpenColumnModal((prev) => !prev);
  }

  async function handleAddColumn(data: FieldValues) {
    const newData = {
      title: data.title,
      // 대시보드 id는 나중에 바꾸셈
      dashboardId: 412,
    };
    setFormData(newData);
    refetch();
    setIsOpenColumnModal(false);
    reset();
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    mounted && (
      <div className={S.container}>
        <SideMenu pageId={0} />
        <div className={S.main}>
          <DashboardHeader
            folder="플랜츠 최고"
            users={[
              {
                letter: '한',
                color: 'green',
              },
              {
                letter: '안',
                color: 'blue',
              },
              {
                letter: '전',
                color: 'yellow',
              },
            ]}
            user={{
              letter: 'B',
              name: '민혁',
              color: 'blue',
              ownerFolder: {
                folder: '플랜츠 최고',
              },
            }}
          />
          <div className={S.mainContainer}>
            {/* 컬럼 목록에 있는 데이터 뿌리기 */}
            <Column
              columnName="To Do"
              cardNum={1}
              addClick={handleClick}
              settingClick={handleClick}
            />
            <div className={S.addButton}>
              <ColumnButton onClick={handleAddColumnModal} />
            </div>
          </div>
        </div>
        {isOpenAddTodoModal && <AddTodoModal onClick={handleClick} />}
        {isOpenColumnModal && (
          <InputModal onClick={handleAddColumnModal} title={'새 컬럼 생성'}>
            <InputLayout label="이름" isNecessary={false}>
              <form
                onSubmit={handleSubmit(handleAddColumn)}
                className={CommonStyle.form}>
                {/* 중복된 컬럼인지 확인 */}
                <DefaultInput
                  placeholder="새 프로젝트 이름"
                  control={control}
                  name="title"
                />
                {/* 빈값일 경우 생성버튼 제한 */}
                <ModalButtonSet
                  isDelete={false}
                  submitButtonTitle="생성"
                  onClickCancel={handleAddColumnModal}
                />
              </form>
            </InputLayout>
          </InputModal>
        )}
      </div>
    )
  );
}

export default boards;
