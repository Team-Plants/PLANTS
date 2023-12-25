import S from '@/components/table/invitedDashboard/invitedList.module.css';
import SearchBar from '@/components/search/searchBar';
import InvitedItem from './invitedItem';

interface InvitedListProps {
  id: number;
  inviterUserId: number;
  teamId: number;
  dashboard: {
    title: string;
    id: number;
  };
  invitee: {
    nickname: string;
    email: string;
    id: number;
  };
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}

function InvitedList({ invitations }: { invitations: InvitedListProps[] }) {
  return (
    <div className={S.container}>
      <div className={S.header}>초대받은 대시보드</div>
      <div className={S.searchBar}>
        <SearchBar />
      </div>
      <div className={S.label}>
        <div>이름</div> <div>초대자</div> <div>수락 여부</div>
      </div>
      <div>
        {invitations &&
          invitations.map((invitation) => {
            return (
              <div key={invitation.id} className={S.tableItem}>
                <InvitedItem
                  dashBoardTitle="프로덕트 디자인"
                  inviter="손동희"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default InvitedList;
