import ButtonGroup from '@/components/button/buttonGroup';
import S from '@/components/table/invitedDashboard/invitedItem.module.css';

interface InvitedItemProps {
  dashBoardTitle?: string;
  invitationId?: number;
  inviter?: string;
}

function InvitedItem({
  dashBoardTitle,
  invitationId,
  inviter,
}: InvitedItemProps) {
  return (
    <div className={S.container}>
      <div className={S.info}>
        <div className={S.title}>
          <span className={S.label}>이름</span> {dashBoardTitle}
        </div>
        <div className={S.inviter}>
          <span className={S.label}>초대자</span> {inviter}
        </div>

        <div className={S.buttonGroup}>
          <ButtonGroup
            primaryContent="수락"
            secondaryContent="거절"
            invitationId={invitationId}
          />
        </div>
      </div>
    </div>
  );
}

export default InvitedItem;
