import { postDashboardsInvitations } from '@/api/dashboard';
import { getInvitationList } from '@/api/invitations';
import PaginationArrowButton from '@/components/button/arrow/paginationArrowButton';
import Button from '@/components/button/button';
import InputLayout from '@/components/modal/input/inputLayout';
import InputModal from '@/components/modal/inputModal/inputModal';
import InvitationItem from '@/components/table/invitation/invitationItem';
import S from '@/components/table/invitation/invitationList.module.css';
import QUERY_KEYS from '@/constants/queryKeys';
import { Invitation } from '@/types/Invitation';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import CommonStyle from '@/components/modal/modalCommon.module.css';
import DefaultInput from '@/components/modal/input/defaultInput/defaultInput';
import ModalButtonSet from '@/components/modal/button/modalButtonSet';

function InvitationList({
  dashboardId,
  onClick,
  invitationFlag,
  setInvitationFlag,
  isModalOpen,
  setIsModalOpen,
}: {
  dashboardId: string;
  onClick: () => void;
  invitationFlag: boolean;
  setInvitationFlag: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [totalCount, setTotalCount] = useState();
  const { isLoading, data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.invitations],
    queryFn: () => getInvitationList(page, 5, dashboardId),
    enabled: false,
  });

  const mutation = useMutation({
    mutationFn: (result: FieldValues) =>
      postDashboardsInvitations(dashboardId, result),
    onError: (error) => {
      alert(error);
    },
  });

  const methods = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  });

  const { handleSubmit, control, reset } = methods;

  async function handleAddTodo(result: FieldValues) {
    await mutation.mutate(result);
    setInvitationFlag(true);
    setIsModalOpen(false);
    reset();
  }

  async function fetchMoreInvitations() {
    if (isLoading) return;
    await refetch();
  }

  useEffect(() => {
    fetchMoreInvitations();
  }, [page]);

  useEffect(() => {
    setTotalCount(data?.totalCount);
  }, [data, invitationFlag]);

  useEffect(() => {
    if (totalCount === undefined) return;
    if (totalCount <= 5) {
      setTotalPage(1);
    } else if (totalCount > 5) {
      setTotalPage(Math.ceil(totalCount / 5));
    }
  }, [totalCount, invitationFlag]);

  useEffect(() => {
    if (invitationFlag) {
      fetchMoreInvitations();
      setInvitationFlag(false);
    }
  }, [invitationFlag]);

  useEffect(() => {
    if (totalPage !== 0 && totalPage < page) setPage((prev) => prev - 1);
  }, [totalPage]);

  return (
    <>
      <div className={S.container}>
        <div className={S.header}>
          초대 내역
          <div className={S.headerButtons}>
            <div className={S.pagination}>
              {`${totalPage} 페이지 중 ${page}`}
              <PaginationArrowButton
                size="small"
                totalPage={totalPage}
                page={page}
                setPage={setPage}
              />
            </div>
            <div className={S.inviteButton}>
              <Button content="초대하기" status="primary" onClick={onClick} />
            </div>
          </div>
        </div>
        <div className={S.label}>이메일</div>
        {data &&
          data?.invitations.map((invitation: Invitation) => {
            return (
              <div className={S.tableItem} key={invitation.id}>
                <InvitationItem
                  email={invitation.invitee.email}
                  invitationId={invitation.id}
                  dashboardId={dashboardId}
                  setInvitationFlag={setInvitationFlag}
                />
              </div>
            );
          })}
      </div>
      {isModalOpen && (
        <InputModal onClick={onClick} title={'초대하기'}>
          <InputLayout label="이메일" isNecessary={false}>
            <form
              onSubmit={handleSubmit(handleAddTodo)}
              className={CommonStyle.form}>
              <DefaultInput
                placeholder="이메일을 입력해 주세요"
                control={control}
                name="email"
              />
              <ModalButtonSet
                isDelete={false}
                submitButtonTitle="초대"
                onClickCancel={onClick}
              />
            </form>
          </InputLayout>
        </InputModal>
      )}
    </>
  );
}

export default InvitationList;
