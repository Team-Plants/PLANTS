import S from '@/components/sideMenu/sideMenu.module.css';
import Image from 'next/image';
import SmallLogoImg from '@/assets/icons/SmallLogo.svg';
import TaskifyImg from '@/assets/icons/Taskify.svg';
import AddBoxImg from '@/assets/icons/AddBox.svg';
import { MouseEvent } from 'react';
import { DashBoardData } from '@/types/DashBoard';

interface SideMenuProps {
  data: DashBoardData;
}

function SideMenu({ data }: SideMenuProps) {
  function handleAddClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    // 버튼을 누르면 대시보드 생성하기 모달이 트리거 되어야함
  }

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
        <button onClick={handleAddClick}>
          <Image
            src={AddBoxImg}
            alt="대시보드 추가 이미지"
            width={20}
            height={20}
          />
        </button>
      </div>
      <ul className={S.dashBoardContainer}>
        {data &&
          data.dashboards.map((dashboard) => (
            <li key={dashboard.id} className={S.dashBoardLi}>
              <div
                className={S.dashBoardColor}
                style={{ backgroundColor: `${dashboard.color}` }}></div>
              <div className={S.dashBoardTitle}>{dashboard.title}</div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SideMenu;
