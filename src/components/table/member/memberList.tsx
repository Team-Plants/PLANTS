import S from '@/components/table/member/memberList.module.css';
import MemberItem from './memberItem';
import ArrowButton from '@/components/button/arrow/arrowButton';
import { MemberProps } from '@/types/Member';
import { useQuery } from '@tanstack/react-query';
import QUERY_KEYS from '@/constants/queryKeys';
import { getMembers } from '@/api/member';
import { useState } from 'react';

interface MemberListProps {
  dashboardId: string;
}

function MemberList({ dashboardId }: MemberListProps) {
  const [page, setPage] = useState(1);
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const { isLoading, data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.members],
    queryFn: () => getMembers(page, 4, Number(dashboardId)),
    enabled: false,
  });

  async function fetchMoreMembers() {
    if (isLoading) return;
    refetch();
  }

  return (
    <div className={S.container}>
      <div className={S.header}>
        구성원
        <div className={S.pagination}>
          {`1페이지 중 ${page}`}
          <ArrowButton size="small" />
        </div>
      </div>
      <div className={S.label}>이름</div>
      <div>
        {data &&
          data?.members.map((member: MemberProps) => {
            return (
              <div className={S.tableItem} key={member.userId}>
                <MemberItem
                  nickname={member.nickname}
                  profileImageUrl={member.profileImageUrl}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MemberList;
