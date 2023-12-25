import S from '@/components/table/invitation/invitationList.module.css';
import InvitationItem from '@/components/table/invitation/invitationItem';
import ArrowButton from '@/components/button/arrow/arrowButton';
import Button from '@/components/button/button';

interface InvitationListProps {
  id: number;
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
}

function InvitationList({
  invitations,
}: {
  invitations: InvitationListProps[];
}) {
  return (
    <div className={S.container}>
      <div className={S.header}>
        초대 내역
        <div className={S.headerButtons}>
          <div className={S.pagination}>
            1페이지 중 1
            <ArrowButton size="small" />
          </div>
          <div className={S.inviteButton}>
            <Button content="초대하기" device="small" status="primary" />
          </div>
        </div>
      </div>
      <div className={S.label}>이메일</div>
      {invitations &&
        invitations.map((v) => {
          return (
            <div className={S.tableItem} key={v.id}>
              <InvitationItem email={v.invitee.email} />
            </div>
          );
        })}
    </div>
  );
}

export default InvitationList;
