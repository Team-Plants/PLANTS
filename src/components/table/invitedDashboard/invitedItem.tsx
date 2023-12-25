import ButtonGroup from '@/components/button/buttonGroup';
import S from '@/components/table/invitedDashboard/invitedItem.module.css';

interface InvitedItemProps {
  dashBoardTitle: string;
  inviter: string;
}

function InvitedItem({
  dashBoardTitle = '프로덕트 디자인',
  inviter = '손동희',
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
        {/* 디바이스에 따른 크기 조절 */}
        <div className={S.buttonGroup}>
          <ButtonGroup
            primaryContent="수락"
            secondaryContent="거절"
            device="small"
          />
        </div>
      </div>
    </div>
  );
}

export default InvitedItem;
