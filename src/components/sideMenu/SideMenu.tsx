import S from '@/components/sideMenu/sideMenu.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SmallLogoImg from '@/assets/icons/SmallLogo.svg';
import TaskifyImg from '@/assets/icons/Taskify.svg';
import AddBoxImg from '@/assets/icons/AddBox.svg';
import CrownImg from '@/assets/icons/Crown.svg';
import { MouseEvent, useState } from 'react';
import { DashBoardList } from '@/types/DashBoard';
import axios, { AxiosResponse } from 'axios';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import NewDashboardModal from '../modal/newDashboardModal/newDashboardModal';

interface SideMenuProps {
  pageId: number;
}

function SideMenu({ pageId }: SideMenuProps) {
  const [dashboards, setDashboards] = useState<DashBoardList[]>([]);
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const [cursorId, setCursorId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState<number>(Infinity);
  const [currentLength, setCurrentLength] = useState(0);
  const [isModalClicked, setIsModalClicked] = useState(false);

  async function fetchMoreDashboards() {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response: AxiosResponse = await axios.get(
        'https://sp-taskify-api.vercel.app/5/dashboards',
        {
          params: {
            navigationMethod: 'infiniteScroll',
            size: 10,
            cursorId: cursorId,
          },
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjYsInRlYW1JZCI6IjUiLCJpYXQiOjE3MDMxNTM0MjEsImlzcyI6InNwLXRhc2tpZnkifQ.EymSG57SnaoeMZQ79mPVpzMbk8FB7Vyr_Hb0P_yFZvY',
          },
        },
      );
      const data = await response?.data;
      setCursorId(data.cursorId + 8);
      setDashboards((prev) => [...prev, ...data.dashboards]);
      setCurrentLength((prev) => prev + data.dashboards.length);
      setTotalCount(data.totalCount);
    } catch (error) {
      console.error('데이터를 불러오는 중 에러가 발생했습니다:', error);
    } finally {
      setIsLoading(false);
    }
  }
  useIntersectionObserver({
    target: target,
    fetchCallback: fetchMoreDashboards,
    props: cursorId,
  });

  function handleCancelClick() {
    setIsModalClicked(false);
  }

  function handleAddClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsModalClicked(true);
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
          {dashboards &&
            dashboards.map((dashboard) => (
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
                    {dashboard.title + ' '}
                    {dashboard.createdByMe && (
                      <Image
                        src={CrownImg}
                        alt="왕관 이미지"
                        width={17.6}
                        height={14}
                      />
                    )}
                  </div>
                </li>
              </Link>
            ))}
          <div ref={setTarget} className={S.refContainer}>
            <div className={S.loading}>{isLoading && 'loading...'}</div>
          </div>
          <div className={S.warning}>
            {totalCount === currentLength && !isLoading
              ? 'no more data!'
              : null}
          </div>
        </ul>
      </div>
      {isModalClicked && <NewDashboardModal onClick={handleCancelClick} />}
    </div>
  );
}

export default SideMenu;
