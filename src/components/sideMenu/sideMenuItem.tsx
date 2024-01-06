import S from '@/components/sideMenu/sideMenuItem.module.css';
import Link from 'next/link';
import Image from 'next/image';
import CrownImg from '@/assets/icons/Crown.svg';

interface SideMenuItemProps {
  dashboardId: number;
  pageId: number;
  dashboardColor: string;
  dashboardTitle: string;
  createdByMe: boolean;
}

function SideMenuItem({
  dashboardId,
  pageId,
  dashboardColor,
  dashboardTitle,
  createdByMe,
}: SideMenuItemProps) {
  return (
    <Link href={`/dashboard/${dashboardId}`} key={dashboardId}>
      <li
        className={S.dashBoardLi}
        style={{
          backgroundColor: pageId == dashboardId ? '#F1EFFD' : '#FFF',
        }}>
        <div
          className={S.dashBoardColor}
          style={{ backgroundColor: `${dashboardColor}` }}></div>
        <div className={S.dashBoardTitle}>
          {dashboardTitle + ' '}
          {createdByMe && (
            <Image src={CrownImg} alt="왕관 이미지" width={17.6} height={14} />
          )}
        </div>
      </li>
    </Link>
  );
}

export default SideMenuItem;
