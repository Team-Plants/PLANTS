import { DeleteInvitation } from '@/api/invitations';
import WhiteSmileLogoImg from '@/assets/icons/WhiteSmileLogo.svg';
import Button from '@/components/button/button';
import S from '@/components/table/invitation/invitationItem.module.css';
import QUERY_KEYS from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

interface InvitationItemProps {
  email: string;
  invitationId: number;
  dashboardId: string;
  setInvitationFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

function InvitationItem({
  email,
  invitationId,
  dashboardId,
  setInvitationFlag,
}: InvitationItemProps) {
  const { isLoading, data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.deleteInvitation],
    queryFn: () => DeleteInvitation(dashboardId, String(invitationId)),
    enabled: false,
  });

  async function fetchDeleteInvitation() {
    if (isLoading) return;
    await refetch();
  }

  async function handleCancelClick() {
    try {
      await fetchDeleteInvitation();
      setInvitationFlag(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={S.container}>
      <div className={S.nameWrapper}>
        <div className={S.badge}>
          <Image
            src={WhiteSmileLogoImg}
            alt="코드잇 아바타"
            width={16}
            height={16}
          />
        </div>
        <div className={S.email}>{email}</div>
      </div>
      <div className={S.button}>
        <Button status="secondary" content="취소" onClick={handleCancelClick} />
      </div>
    </div>
  );
}

export default InvitationItem;
