import S from '@/components/sideMenu/sideMenu.module.css';
import Image from 'next/image';
import SmallLogoImg from '@/assets/icons/SmallLogo.svg';
import TaskifyImg from '@/assets/icons/Taskify.svg';
import AddBoxImg from '@/assets/icons/AddBox.svg';

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
      <div className={S.headerContainer}>
        <p className={S.headerDescription}>Dash Boards</p>
        <button>
          <Image
            src={AddBoxImg}
            alt="대시보드 추가 이미지"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}

export default SideMenu;
