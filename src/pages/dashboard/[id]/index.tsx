/* eslint-disable react-hooks/rules-of-hooks */
import {
  deleteColumn,
  getColumns,
  postColumnAdd,
  putColumn,
} from '@/api/column';
import ColumnButton from '@/components/button/column/columnButton';
import Column from '@/components/column/column';
import AddTodoModal from '@/components/modal/addTodoModal/addTodoModal';
import ActiveModalButtonSet from '@/components/modal/button/activeModalButtonSet';
import DefaultInput from '@/components/modal/input/defaultInput/defaultInput';
import InputLayout from '@/components/modal/input/inputLayout';
import InputModal from '@/components/modal/inputModal/inputModal';
import CommonStyle from '@/components/modal/modalCommon.module.css';
import QUERY_KEYS from '@/constants/queryKeys';
import S from '@/pages/dashboard/[id]/dashboard.module.css';
import { ColumnType } from '@/types/column';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ReactElement, useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { GetServerSidePropsContext } from 'next';
import Layout from '@/components/layout/layout';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (!context.params) {
    return {
      notFound: true,
    };
  }

  const dashboardId = context?.params['id'];

  return {
    props: {
      dashboardId,
    },
  };
}

function dashboard({ dashboardId }: { dashboardId: string }) {
  const [isOpenAddTodoModal, setIsOpenAddTodoModal] = useState(false);
  const [isOpenColumnAddModal, setIsOpenColumnAddModal] = useState(false);
  const [isOpenColumnManageModal, setIsOpenColumnManageModal] = useState(false);
  const [isColumnNameValid, setIsColumnNameValid] = useState(false);
  const [columnId, setColumnId] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [flag, setFlag] = useState(false);
  const [fullData, setFullData] = useState([]);

  const { data: columns, refetch } = useQuery({
    queryKey: [QUERY_KEYS.columns],
    queryFn: () => getColumns(dashboardId),
    enabled: false,
  });

  const mutation = useMutation({
    mutationFn: (data: FieldValues) => postColumnAdd(data.title, dashboardId),
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

  function handleColumnAddModal() {
    setIsOpenColumnAddModal((prev) => !prev);
  }

  function handleColumnManageModal(id: number) {
    setColumnId(id);
    setIsOpenColumnManageModal((prev) => !prev);
  }

  async function handleAddColumn(data: FieldValues) {
    mutation.mutate(data);
    setIsOpenColumnAddModal(false);
    reset();
    setFullData(columns);
    // 새로고침 필요
  }

  async function handleModifyColumn(data: FieldValues) {
    putColumn(data.title, columnId);
    setIsOpenColumnManageModal(false);
    reset();
    setFlag(true);
    // 새로고침 필요
  }

  function handleDeleteColumn(columnId: number): void {
    if (confirm('컬럼의 모든 카드가 삭제됩니다')) {
      deleteColumn(columnId);
      setIsOpenColumnManageModal(false);
      setFlag(true);
    }
    // 새로고침 필요
  }

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

  useEffect(() => {
    if (flag) {
      refetch();
    }
    setFlag(false);
  }, [flag]);

  // 컬럼 관리 코드
  useEffect(() => {
    setFullData(columns);
    refetch();
  }, [columns]);

  return (
    <div className={S.mainContainer}>
      {fullData &&
        fullData?.map((column: ColumnType) => {
          return (
            <div key={column.id}>
              <Column
                columnId={column.id}
                columnName={column.title}
                addClick={handleTodoModal}
                settingClick={() => handleColumnManageModal(column.id)}
              />
            </div>
          );
        })}
      <div className={S.addButton}>
        <ColumnButton onClick={handleColumnAddModal} />
      </div>
      {isOpenAddTodoModal && <AddTodoModal onClick={handleTodoModal} />}
      {isOpenColumnAddModal && (
        <InputModal onClick={handleColumnAddModal} title={'새 컬럼 생성'}>
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
                onClickCancel={handleColumnAddModal}
                isActive={isActive}
              />
            </form>
          </InputLayout>
        </InputModal>
      )}
      {isOpenColumnManageModal && (
        <InputModal onClick={() => handleColumnManageModal} title={'컬럼 관리'}>
          <InputLayout label="이름" isNecessary={false}>
            <form
              onSubmit={handleSubmit(handleModifyColumn)}
              className={CommonStyle.form}>
              <DefaultInput
                placeholder="변경할 프로젝트 이름"
                control={control}
                name="title"
              />
              <ActiveModalButtonSet
                isDelete={true}
                submitButtonTitle="변경"
                onClickCancel={() =>
                  setIsOpenColumnManageModal((prev) => !prev)
                }
                // TODO: 모달 더 추가해야 함
                onClickDelete={() => handleDeleteColumn(columnId)}
                isActive={isActive}
              />
            </form>
          </InputLayout>
        </InputModal>
      )}
    </div>
  );
}

export default dashboard;

dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};