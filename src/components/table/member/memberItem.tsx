import { DeleteMember } from '@/api/member';
import Button from '@/components/button/button';
import S from '@/components/table/member/memberItem.module.css';
import QUERY_KEYS from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

interface MemberItemProps {
  nickname: string;
  profileImageUrl?: string;
  memberId: number;
  setMemberFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

function MemberItem({
  nickname,
  profileImageUrl,
  memberId,
  setMemberFlag,
}: MemberItemProps) {
  const { isLoading, data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.deleteMember],
    queryFn: () => DeleteMember(String(memberId)),
    enabled: false,
  });

  async function fetchDeleteMember() {
    if (isLoading) return;
    await refetch();
  }

  async function handleCancelClick() {
    try {
      await fetchDeleteMember();
      setMemberFlag(true);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className={S.container}>
      {/* TODO: 아바타 배지 넣기 */}
      <div className={S.infoGroup}>아바타 {nickname}</div>

      <Button content="삭제" status="secondary" onClick={handleCancelClick} />
    </div>
  );
}

export default MemberItem;
