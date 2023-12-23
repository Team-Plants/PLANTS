import S from '@/components/header/dashboardHeader/dashboardHeader.module.css';
import Image from 'next/image';
import vectorImg from '@/assets/icons/Vector.svg';
import NameBadge from '@/components/nameBadge/nameBadge.tsx';

function DashboardHeader() {
  return (
    <div className={S.container}>
      <div className={S.buttonContainer}>
        <div className={S.button}>관리</div>
        <div className={S.button}>초대하기</div>
      </div>
      <Image className={S.vectorImage} src={vectorImg} alt="구분이미지" />
      <NameBadge color="yellow" letter="C" />
    </div>
  );
}

export default DashboardHeader;
