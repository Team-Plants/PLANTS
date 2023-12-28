import Button from '@/components/button/button';
import S from '@/components/table/member/memberItem.module.css';

interface MemberItemProps {
  nickname: string;
  profileImageUrl?: string;
}

function MemberItem({ nickname, profileImageUrl }: MemberItemProps) {
  return (
    <div className={S.container}>
      {/* TODO: 아바타 배지 넣기 */}
      <div className={S.infoGroup}>아바타 {nickname}</div>

      <Button content="삭제" status="secondary" />
    </div>
  );
}

export default MemberItem;
