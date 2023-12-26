import S from '@/components/table/member/memberItem.module.css';
import Button from '@/components/button/button';

interface MemberItemProps {
  nickname: string;
  profileImageUrl?: string;
}

function MemberItem({ nickname, profileImageUrl }: MemberItemProps) {
  return (
    <div className={S.container}>
      {/* TODO: 아바타 배지 넣기 */}
      <div className={S.infoGroup}>아바타 {nickname}</div>
      {/* TODO: 디바이스형 버튼 크기 넣기 */}
      <Button content="삭제" device="small" status="secondary" />
    </div>
  );
}

export default MemberItem;
