import { getInvitations } from '@/api/invitations';
import PaginationArrowButton from '@/components/button/arrow/paginationArrowButton';
import Button from '@/components/button/button';
import InvitationItem from '@/components/table/invitation/invitationItem';
import S from '@/components/table/invitation/invitationList.module.css';
import QUERY_KEYS from '@/constants/queryKeys';
import { Invitation } from '@/types/Invitation';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

function InvitationList({
  dashboardId,
  onClick,
}: {
  dashboardId: string;
  onClick?: () => void;
}) {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [totalCount, setTotalCount] = useState();
  const { isLoading, data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.invitations],
    queryFn: () => getInvitations(page, 5, dashboardId),
    enabled: false,
  });

  async function fetchMoreInvitations() {
    if (isLoading) return;
    await refetch();
  }

  useEffect(() => {
    fetchMoreInvitations();
  }, [page]);

  useEffect(() => {
    setTotalCount(data?.totalCount);
  }, [data]);

  useEffect(() => {
    if (totalCount === undefined) return;
    if (totalCount <= 5) {
      setTotalPage(1);
    } else if (totalCount > 5) {
      setTotalPage(Math.ceil(totalCount / 5));
    }
  }, [totalCount]);

  return (
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
              <InvitationItem email={invitation.invitee.email} />
            </div>
          );
        })}
    </div>
  );
}

export default InvitationList;
