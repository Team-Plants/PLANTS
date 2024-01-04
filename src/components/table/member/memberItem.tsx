import { DeleteMember } from '@/api/member';
import Button from '@/components/button/button';
import S from '@/components/table/member/memberItem.module.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import CrownImg from '@/assets/icons/Crown.svg';
import Image from 'next/image';
import NameBadge from '@/components/nameBadge/nameBadge';
import { randomNickNameColor } from '@/utils/utility';

interface MemberItemProps {
  nickname: string;
  profileImageUrl?: string;
  memberId: number;
  setMemberFlag: React.Dispatch<React.SetStateAction<boolean>>;
  isOwner?: boolean;
}

function MemberItem({
  nickname,
  profileImageUrl,
  memberId,
  isOwner,
}: MemberItemProps) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => DeleteMember(String(memberId)),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  async function handleCancelClick() {
    try {
      mutation.mutate();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className={S.container}>
      <div className={S.infoGroup}>
        {profileImageUrl ? (
          <Image
            src={profileImageUrl}
            alt="프로필"
            width={38}
            height={38}
            className={S.profileImage}
          />
        ) : (
          <NameBadge
            letter={nickname.slice(0, 1)}
            color={randomNickNameColor()}
          />
        )}
        {`${nickname} `}
        {isOwner && (
          <Image src={CrownImg} alt="왕관 이미지" width={17.6} height={14} />
        )}
      </div>

      {isOwner ? null : (
        <Button content="삭제" status="secondary" onClick={handleCancelClick} />
      )}
    </div>
  );
}

export default MemberItem;
