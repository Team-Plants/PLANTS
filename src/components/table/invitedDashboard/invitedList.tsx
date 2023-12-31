import S from '@/components/table/invitedDashboard/invitedList.module.css';
import SearchBar from '@/components/search/searchBar';
import InvitedItem from './invitedItem';
import { InvitedDashBoardProps } from '@/types/InvitedDashBoard';
import { useState, useEffect, MutableRefObject } from 'react';

interface InvitedListProps {
  invitations: InvitedDashBoardProps[];
  // ref: MutableRefObject<HTMLDivElement | null>;
}

function InvitedList({
  invitations,
  // ref
}: InvitedListProps) {
  const [invitation, setInvitation] = useState(invitations);

  useEffect(() => {
    setInvitation(invitations);
  }, [invitations]);

  return (
    <div className={S.container}>
      <div className={S.header}>초대받은 대시보드</div>
      <div className={S.searchBar}>
        <SearchBar invitations={invitations} setInvitation={setInvitation} />
      </div>
      <div className={S.label}>
        <div>이름</div> <div>초대자</div> <div>수락 여부</div>
      </div>
      <div>
        {invitation &&
          invitation.map((invitation) => {
            return (
              <div key={invitation.id} className={S.tableItem}>
                <InvitedItem
                  dashBoardTitle={invitation.dashboard.title}
                  invitationId={invitation.id}
                  inviter={invitation.invitee.nickname}
                />
              </div>
            );
          })}
        {/* <div ref={ref} style={{width:200, height:100, border: '1px solid red'}}/> */}
      </div>
    </div>
  );
}

export default InvitedList;
