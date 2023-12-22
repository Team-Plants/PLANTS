import S from '@/components/sideMenu/sideMenu.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SmallLogoImg from '@/assets/icons/SmallLogo.svg';
import TaskifyImg from '@/assets/icons/Taskify.svg';
import AddBoxImg from '@/assets/icons/AddBox.svg';
import { MouseEvent } from 'react';
import { DashBoardData } from '@/types/DashBoard';

interface SideMenuProps {
  pageId: number;
  data: DashBoardData;
}

function SideMenu({ pageId, data }: SideMenuProps) {
  function handleAddClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    // 버튼을 누르면 대시보드 생성하기 모달이 트리거 되어야함
  }

  return (
    <div className={S.main}>
      <div className={S.headerOuter}>
        <div className={S.imgContainer}>
          <Link href="/myboard">
            <Image
              src={SmallLogoImg}
              alt="로고 이미지"
              className={S.smallLogoImg}
            />
          </Link>
          <Link href="/myboard">
            <Image
              src={TaskifyImg}
              alt="Taskify 이미지"
              className={S.taskifyImg}
            />
          </Link>
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
      </div>
      <div className={S.dashBoardOuter}>
        <ul className={S.dashBoardContainer}>
          {data &&
            data.dashboards.map((dashboard) => (
              <Link href={`/myboard/${dashboard.id}`} key={dashboard.id}>
                <li
                  className={S.dashBoardLi}
                  style={{
                    backgroundColor:
                      pageId == dashboard.id ? '#F1EFFD' : '#FFF',
                  }}>
                  <div
                    className={S.dashBoardColor}
                    style={{ backgroundColor: `${dashboard.color}` }}></div>
                  <div className={S.dashBoardTitle}>
                    {dashboard.createdByMe
                      ? dashboard.title + '  👑'
                      : dashboard.title}
                  </div>
                </li>
              </Link>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
