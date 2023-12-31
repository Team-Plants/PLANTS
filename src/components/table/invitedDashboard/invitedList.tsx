import S from '@/components/table/invitedDashboard/invitedList.module.css';
import SearchBar from '@/components/search/searchBar';
import InvitedItem from './invitedItem';
import { InvitedDashBoardProps } from '@/types/InvitedDashBoard';
import { useState } from 'react';

function InvitedList({
  invitations,
}: {
  invitations: InvitedDashBoardProps[];
}) {
  const [invitation, setInvitation] = useState(invitations);

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
                  inviter={invitation.invitee.nickname}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default InvitedList;
