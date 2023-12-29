import S from '@/components/table/member/memberList.module.css';
import MemberItem from './memberItem';
import { MemberProps } from '@/types/Member';
import { useQuery } from '@tanstack/react-query';
import QUERY_KEYS from '@/constants/queryKeys';
import { getMembers } from '@/api/member';
import { useEffect, useState } from 'react';
import PaginationArrowButton from '@/components/button/arrow/paginationArrowButton';

interface MemberListProps {
  dashboardId: string;
  memberFlag: boolean;
  setMemberFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

function MemberList({
  dashboardId,
  memberFlag,
  setMemberFlag,
}: MemberListProps) {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [totalCount, setTotalCount] = useState();
  const { isLoading, data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.members],
    queryFn: () => getMembers(page, 4, Number(dashboardId)),
    enabled: false,
  });

  async function fetchMoreMembers() {
    if (isLoading) return;
    await refetch();
  }

  useEffect(() => {
    fetchMoreMembers();
  }, [page]);

  useEffect(() => {
    setTotalCount(data?.totalCount);
  }, [data]);

  useEffect(() => {
    if (totalCount === undefined) return;
    if (totalCount <= 4) {
      setTotalPage(1);
    } else if (totalCount > 4) {
      setTotalPage(Math.ceil(totalCount / 4));
    }
  }, [totalCount]);

  useEffect(() => {
    if (memberFlag) {
      fetchMoreMembers();
      setMemberFlag(false);
    }
  }, [memberFlag]);

  useEffect(() => {
    if (totalPage !== 0 && totalPage < page) setPage((prev) => prev - 1);
  }, [totalPage]);

  return (
    <div className={S.container}>
      <div className={S.header}>
        구성원
        <div className={S.pagination}>
          {`${totalPage} 페이지 중 ${page}`}
          <PaginationArrowButton
            size="small"
            totalPage={totalPage}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
      <div className={S.label}>이름</div>
      <div>
        {data &&
          data?.members.map((member: MemberProps) => {
            return (
              <div className={S.tableItem} key={member.userId}>
                <MemberItem
                  isOwner={member.isOwner}
                  nickname={member.nickname}
                  profileImageUrl={member.profileImageUrl}
                  memberId={member.id}
                  setMemberFlag={setMemberFlag}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MemberList;
