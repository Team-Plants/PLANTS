import Image from 'next/image';
import S from '@/components/modal/input/selectInput/managerOption.module.css';

interface ManagerOptionProps {
  name: string;
  profileImg?: string;
}

// 모달 내 담당자 선택 옵션 내부 컴포넌트
// 전달받은 이미지가 없는 경우 기본원으로 처리, api 연동 후 추가 확인 필요
function ManagerOption({ name, profileImg }: ManagerOptionProps) {
  return (
    <div className={S.managerOptionContainer}>
      {profileImg ? (
        <Image
          width={26}
          height={26}
          src={profileImg}
          alt="사용자 프로필"
          style={{ borderRadius: 50 }}
        />
      ) : (
        <div className={S.circle}></div>
      )}
      <div className={S.managerName}>{name}</div>
    </div>
  );
}

export default ManagerOption;
