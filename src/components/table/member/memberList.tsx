import { getPaginationMembers } from '@/api/member';
import PaginationArrowButton from '@/components/button/arrow/paginationArrowButton';
import MemberItem from '@/components/table/member/memberItem';
import S from '@/components/table/member/memberList.module.css';
import QUERY_KEYS from '@/constants/queryKeys';
import { MemberProps } from '@/types/Member';
import { useQuery } from '@tanstack/react-query';
import { Dispatch, Key, SetStateAction, useEffect, useState } from 'react';

interface MemberListProps {
  dashboardId: string;
  memberFlag: boolean;
  setMemberFlag: Dispatch<SetStateAction<boolean>>;
}

function MemberList({ dashboardId, setMemberFlag }: MemberListProps) {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [totalCount, setTotalCount] = useState();
  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.members, page, Number(dashboardId)],
    queryFn: () => getPaginationMembers(page, 4, Number(dashboardId)),
    enabled: true,
  });

  useEffect(() => {
    setTotalCount(data?.totalCount);
    refetch();
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
          data?.members.map((member: MemberProps, index: Key) => {
            return (
              <div className={S.tableItem} key={index}>
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
