import PlusImg from '@/assets/icons/Plus.svg';
import S from '@/components/profile/profileImg.module.css';
import Image from 'next/image';

function ProfileImg() {
  return (
    <div className={S.container}>
      <Image src={PlusImg} alt="플러스" />
    </div>
  );
}

export default ProfileImg;
