import S from '@/components/sideMenu/sideMenu.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SmallLogoImg from '@/assets/icons/SmallLogo.svg';
import TaskifyImg from '@/assets/icons/Taskify.svg';
import AddBoxImg from '@/assets/icons/AddBox.svg';
import CrownImg from '@/assets/icons/Crown.svg';
import { MouseEvent, useEffect, useState } from 'react';
import { DashBoardList } from '@/types/DashBoard';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import NewDashboardModal from '@/components/modal/newDashboardModal/newDashboardModal';
import { getSideMenuDashboards } from '@/api/dashboard';
import { useQuery } from '@tanstack/react-query';
import QUERY_KEYS from '@/constants/queryKeys';

interface SideMenuProps {
  pageId: number;
  flag?: boolean;
}

function SideMenu({ pageId, flag }: SideMenuProps) {
  const [dashboards, setDashboards] = useState<DashBoardList[]>([]);
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  // const [cursorId, setCursorId] = useState();
  const [totalCount, setTotalCount] = useState<number>(Infinity);
  const [currentLength, setCurrentLength] = useState(0);
  const [isModalClicked, setIsModalClicked] = useState(false);
  const [page, setPage] = useState(1);
  const { isLoading, data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.sidemenuDashboards],
    queryFn: () => getSideMenuDashboards(5, page),
    enabled: false,
  });

  async function fetchMoreDashboards() {
    if (isLoading) return;
    refetch();
  }

  useEffect(() => {
    if (flag) {
      setDashboards([]);
      // setCursorId(undefined);
      setPage(1);
      setCurrentLength(0);
      setTotalCount(0);
      refetch();
    }
  }, [flag]);

  useEffect(() => {
    if (data) {
      // setCursorId(data.cursorId + 8);
      setPage((prev) => prev + 1);
      setDashboards((prev) => [...prev, ...data.dashboards]);
      setCurrentLength((prev) => prev + data.dashboards.length);
      setTotalCount(data.totalCount);
    }
  }, [data]);

  useIntersectionObserver({
    target: target,
    fetchCallback: fetchMoreDashboards,
    props: page,
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
          <Link href="/mydashboard">
            <Image
              src={SmallLogoImg}
              alt="로고 이미지"
              className={S.smallLogoImg}
            />
          </Link>
          <Link href="/mydashboard">
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
              <Link href={`/dashboard/${dashboard.id}`} key={dashboard.id}>
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
