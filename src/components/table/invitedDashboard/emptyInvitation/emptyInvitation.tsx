import UnsubscribeImg from '@/assets/icons/Unsubscribe.svg';
import Image from 'next/image';
import S from '@/components/table/invitedDashboard/emptyInvitation/emptyInvitation.module.css';

function EmptyInvitation() {
  return (
    <div className={S.container}>
      <p className={S.title}>초대받은 대시보드</p>
      <Image
        src={UnsubscribeImg}
        alt="초대없음 이미지"
        width={100}
        height={100}
        className={S.image}
      />
      <p className={S.description}>아직 초대받은 대시보드가 없어요</p>
    </div>
  );
}

export default EmptyInvitation;
