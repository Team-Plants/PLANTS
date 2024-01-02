import S from '@/components/table/invitedDashboard/invitedList.module.css';
import SearchBar from '@/components/search/searchBar';
import InvitedItem from './invitedItem';
import { useEffect, useState } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { getInvitations } from '@/api/invitations';
import { useInfiniteQuery } from '@tanstack/react-query';
import EmptyInvitation from '@/components/table/invitedDashboard/emptyInvitation/emptyInvitation';
import { InvitedDashBoardProps } from '@/types/InvitedDashBoard';

function InvitedList() {
  const [title, setTitle] = useState<string>();
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const [cursorId, setCursorId] = useState();;

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['invitation', title],
    queryFn: ({ pageParam: cursorId }) => getInvitations(6, cursorId, title),
    getNextPageParam: (lastPage) => {
      if (lastPage) {
        return lastPage.cursorId;
      } else {
        return null;
      }
    },
    initialPageParam: cursorId,
  });

  useIntersectionObserver({
    target: target,
    fetchCallback: fetchNextPage,
    props: cursorId,
  });

  useEffect(() => {
    if (data) {
      const lastPage = data.pages[data.pages.length - 1];
      if (lastPage) {
        setCursorId(lastPage.cursorId);
      }
    }
  }, [data]);

  const invitation = data?.pages;

  return (
    <>
      {invitation ? (
        <div className={S.container}>
          <div className={S.header}>초대받은 대시보드</div>
          <div className={S.searchBar}>
            <SearchBar setValue={setTitle} />
          </div>
          <div className={S.label}>
            <div>이름</div> <div>초대자</div> <div>수락 여부</div>
          </div>
          <div>
            {invitation &&
              invitation.map((item, index) => {
                return (
                  <div key={index}>
                    {item.invitations?.map((invitation: InvitedDashBoardProps) => (
                      <div key={invitation?.id} className={S.tableItem}>
                        <InvitedItem
                          dashBoardTitle={invitation?.dashboard?.title}
                          invitationId={invitation?.id}
                          inviter={invitation?.inviter?.nickname}
                        />
                      </div>
                    ))}
                  </div>
                );
              })}
            {hasNextPage && (
              <div
                ref={setTarget}
                style={{ width: 200, height: 20, border: '1px solid red'}}
              />
            )}
          </div>
        </div>
      ) : (
        <EmptyInvitation />
      )}
    </>
  );
}

export default InvitedList;
