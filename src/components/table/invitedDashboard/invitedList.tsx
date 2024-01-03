import S from '@/components/table/invitedDashboard/invitedList.module.css';
import SearchBar from '@/components/search/searchBar';
import InvitedItem from './invitedItem';
import { useEffect, useState } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { getInvitations } from '@/api/invitations';
import { useInfiniteQuery } from '@tanstack/react-query';
import EmptyInvitation from '@/components/table/invitedDashboard/emptyInvitation/emptyInvitation';
import { InvitedDashBoardProps } from '@/types/InvitedDashBoard';
import useDebounce from '@/hooks/useDebounce';

interface InvitationData {
  invitations?: InvitedDashBoardProps[] | null;
  cursorId?: string | null;
}

function InvitedList() {
  const [title, setTitle] = useState<string>();
  const debouncedSearchValue = useDebounce(title, 500);
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const [invitation, setInvitation] = useState<InvitationData[]>();
  const [cursorId, setCursorId] = useState();

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['invitations', debouncedSearchValue],
    queryFn: ({ pageParam: cursorId }) =>
      getInvitations(
        6,
        cursorId,
        debouncedSearchValue === '' ? null : debouncedSearchValue,
      ),
    enabled: true,
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
      const invitationsData = data.pages;
      if (lastPage) {
        setCursorId(lastPage.cursorId);
      }
      setInvitation(invitationsData);
    }
  }, [data]);

  return (
    <>
      {invitation ? (
        <div className={S.container}>
          <div className={S.header}>초대받은 대시보드</div>
          <div className={S.searchBar}>
            <SearchBar setValue={setTitle} value={title} />
          </div>
          <div className={S.label}>
            <div className={S.labelTitle}>이름</div>{' '}
            <div className={S.labelTitle}>초대자</div>{' '}
            <div className={S.labelTitle}>수락 여부</div>
          </div>
          <div>
            {invitation &&
              invitation.map((item, index) => {
                return (
                  <div key={index}>
                    {item.invitations?.map(
                      (invitation: InvitedDashBoardProps) => (
                        <div key={invitation?.id} className={S.tableItem}>
                          <InvitedItem
                            dashBoardTitle={invitation?.dashboard?.title}
                            invitationId={invitation?.id}
                            inviter={invitation?.inviter?.nickname}
                          />
                        </div>
                      ),
                    )}
                  </div>
                );
              })}
          </div>
          {hasNextPage && (
            <div
              ref={setTarget}
              style={{ width: 200, height: 20, border: '1px solid white' }}
            />
          )}
        </div>
      ) : (
        <EmptyInvitation />
      )}
    </>
  );
}

export default InvitedList;
