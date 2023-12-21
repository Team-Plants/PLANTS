import S from './sideMenu.module.css';
import Image from 'next/image';
import SmallLogoImg from '@/assets/icons/SmallLogo.svg';
import TaskifyImg from '@/assets/icons/Taskify.svg';

function SideMenu() {
  return (
    <div className={S.main}>
      <div className={S.imgContainer}>
        <Image
          src={SmallLogoImg}
          alt="로고 이미지"
          className={S.smallLogoImg}
        />
        <Image src={TaskifyImg} alt="Taskify 이미지" className={S.taskifyImg} />
      </div>
    </div>
  );
}

export default SideMenu;
