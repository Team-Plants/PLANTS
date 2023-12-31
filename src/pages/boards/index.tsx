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
import CommonStyle from '@/components/modal/modalCommon.module.css';
import { FieldValues, useForm } from 'react-hook-form';
import { getColumns, postColumnAdd } from '@/api/column';
import { useMutation, useQuery } from '@tanstack/react-query';
import Column from '@/components/column/column';
import ActiveModalButtonSet from '@/components/modal/button/activeModalButtonSet';
import QUERY_KEYS from '@/constants/queryKeys';
import { ColumnType } from '@/types/Column';

function boards() {
  const [mounted, setMounted] = useState(false);
  const [isOpenAddTodoModal, setIsOpenAddTodoModal] = useState(false);
  const [isOpenColumnModal, setIsOpenColumnModal] = useState(false);
  const [isColumnNameValid, setIsColumnNameValid] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { data: columns, refetch } = useQuery({
    queryKey: [QUERY_KEYS.columns],
    queryFn: () => getColumns(612),
    enabled: false,
  });

  const mutation = useMutation({
    mutationFn: (data: FieldValues) => postColumnAdd(data),
    onError: (error) => {
      alert(error);
    },
  });

  const methods = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      title: '',
    },
  });

  const { handleSubmit, control, reset, watch } = methods;

  function handleTodoModal() {
    setIsOpenAddTodoModal((prev) => !prev);
  }

  function handleAddColumnModal() {
    setIsOpenColumnModal((prev) => !prev);
  }

  async function handleAddColumn(data: FieldValues) {
    mutation.mutate({ title: data.title, dashboardId: 612 });
    setIsOpenColumnModal(false);
    reset();
  }

  // 마운트 처리 코드
  useEffect(() => {
    setMounted(true);
  }, []);

  // 빈값 확인하는 코드
  useEffect(() => {
    if (watch('title') === '') setIsColumnNameValid(false);
    else setIsColumnNameValid(true);
  }, [watch()]);

  // 버튼 비활성화 관련 코드
  useEffect(() => {
    if (isColumnNameValid) setIsActive(true);
    else setIsActive(false);
  }, [isColumnNameValid]);

  // 칼럼 조회 하는 코드
  useEffect(() => {
    refetch();
  }, [columns, refetch]);

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
            {columns &&
              columns?.map((column: ColumnType) => {
                return (
                  <div key={column.id}>
                    <Column
                      columnName={column.title}
                      cardNum={1}
                      addClick={handleTodoModal}
                      // TODO: 편집 버튼 추가
                      settingClick={() => {}}
                    />
                  </div>
                );
              })}
            <div className={S.addButton}>
              <ColumnButton onClick={handleAddColumnModal} />
            </div>
          </div>
        </div>
        {isOpenAddTodoModal && <AddTodoModal onClick={handleTodoModal} />}
        {isOpenColumnModal && (
          <InputModal onClick={handleAddColumnModal} title={'새 컬럼 생성'}>
            <InputLayout label="이름" isNecessary={false}>
              <form
                onSubmit={handleSubmit(handleAddColumn)}
                className={CommonStyle.form}>
                <DefaultInput
                  placeholder="새 프로젝트 이름"
                  control={control}
                  name="title"
                />
                <ActiveModalButtonSet
                  isDelete={false}
                  submitButtonTitle="생성"
                  onClickCancel={handleAddColumnModal}
                  isActive={isActive}
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
