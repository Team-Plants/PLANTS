import { getInvitationList } from '@/api/invitations';
import PaginationArrowButton from '@/components/button/arrow/paginationArrowButton';
import InvitationItem from '@/components/table/invitation/invitationItem';
import S from '@/components/table/invitation/invitationList.module.css';
import QUERY_KEYS from '@/constants/queryKeys';
import { Invitation, InvitationList } from '@/types/Invitation';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import TodoInvite from '@/components/modal/todoInvite/todoInvite';
import InvitationButton from '@/components/button/invitation/invitation';

function InvitationList({
  dashboardId,
  invitationFlag,
  setInvitationFlag,
}: {
  dashboardId: string;
  invitationFlag: boolean;
  setInvitationFlag: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [totalCount, setTotalCount] = useState();
  const [fullData, setFullData] = useState<InvitationList>();
  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.invitations],
    queryFn: () => getInvitationList(page, 5, dashboardId),
    enabled: true,
  });

  async function fetchMoreInvitations() {
    await refetch();
  }

  // useEffect(() => {
  //   setInvitationFlag(true);
  // }, [onClick()]);

  useEffect(() => {
    setFullData(data);
    refetch();
  }, [data, dashboardId]);

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (invitationFlag) {
      setInvitationFlag(false);
      fetchMoreInvitations();
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
              <InvitationButton onClick={handleModal} />
            </div>
          </div>
        </div>
        <div className={S.label}>이메일</div>
        {fullData &&
          fullData?.invitations.map((invitation: Invitation) => {
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
        <TodoInvite onClick={handleModal} dashboardId={dashboardId} />
      )}
    </>
  );
}

export default InvitationList;
