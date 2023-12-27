import WhiteSmileLogoImg from '@/assets/icons/WhiteSmileLogo.svg';
import Button from '@/components/button/button';
import S from '@/components/table/invitation/invitationItem.module.css';
import Image from 'next/image';

interface InvitationItemProps {
  email: string;
}

function InvitationItem({ email }: InvitationItemProps) {
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
        <Button status="secondary" content="취소" />
      </div>
    </div>
  );
}

export default InvitationItem;
