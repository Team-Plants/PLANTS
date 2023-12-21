import Image from 'next/image';
import S from '@/components/modal/input/selectInput/managerOption.module.css';

interface ManagerOptionProps {
  name: string;
  profileImg?: string;
}

function ManagerOption({ name, profileImg }: ManagerOptionProps) {
  return (
    <div className={S.managerOptionContainer}>
      {profileImg ? (
        <Image width={26} height={26} src={profileImg} alt="사용자 프로필" />
      ) : (
        <div className={S.circle}></div>
      )}
      <div className={S.managerName}>{name}</div>
    </div>
  );
}

export default ManagerOption;
