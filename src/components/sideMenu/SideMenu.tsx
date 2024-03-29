import S from '@/components/sideMenu/sideMenu.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SmallLogoImg from '@/assets/icons/SmallLogo.svg';
import TaskifyImg from '@/assets/icons/Taskify.svg';
import AddBoxImg from '@/assets/icons/AddBox.svg';
import { MouseEvent, SetStateAction, useEffect, useState } from 'react';
import { DashBoardList } from '@/types/DashBoard';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import NewDashboardModal from '@/components/modal/newDashboardModal/newDashboardModal';
import { getDashboards } from '@/api/dashboard';
import { useQuery } from '@tanstack/react-query';
import QUERY_KEYS from '@/constants/queryKeys';
import SideMenuItem from '@/components/sideMenu/sideMenuItem';
import DoubleArrowLeft from '@/assets/icons/DoubleArrowLeft.png';
import DoubleArrowRight from '@/assets/icons/DoubleArrowRight.png';

interface SideMenuProps {
  pageId: number;
  initialPage: number;
  flag?: boolean;
  refreshFlag?: boolean;
  secondAddFlag?: boolean;
  setSecondAddFlag?: React.Dispatch<SetStateAction<boolean>>;
}

function SideMenu({
  pageId,
  initialPage,
  flag,
  refreshFlag,
  secondAddFlag,
  setSecondAddFlag,
}: SideMenuProps) {
  const [dashboards, setDashboards] = useState<DashBoardList[]>([]);
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const [totalCount, setTotalCount] = useState<number>(Infinity);
  const [currentLength, setCurrentLength] = useState(0);
  const [isModalClicked, setIsModalClicked] = useState(false);
  const [page, setPage] = useState(initialPage);
  const [addFlag, setAddFlag] = useState(false);
  const [width, setWidth] = useState(67);
  const { isLoading, data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.dashboards],
    queryFn: () =>
      getDashboards({ navigationMethod: 'pagination', size: 5, page: page }),
    enabled: false,
  });

  async function fetchMoreDashboards() {
    if (isLoading) return;
    await refetch();
  }

  useEffect(() => {
    setDashboards([]);
    setPage(1);
    setCurrentLength(0);
    setTotalCount(0);
    refetch();
  }, [flag]);

  useEffect(() => {
    if (addFlag) {
      setDashboards([]);
      setPage(1);
      setCurrentLength(0);
      setTotalCount(0);
      refetch();
      setAddFlag(false);
    }
  }, [addFlag]);

  useEffect(() => {
    if (secondAddFlag) {
      setDashboards([]);
      setPage(1);
      setCurrentLength(0);
      setTotalCount(0);
      refetch();
      setSecondAddFlag?.(false);
    }
  }, [secondAddFlag]);

  useEffect(() => {
    if (refreshFlag) {
      setDashboards([]);
      setPage(1);
      setCurrentLength(0);
      setTotalCount(0);
    }
  }, [refreshFlag]);

  useEffect(() => {
    if (data) {
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

  function handleExpansionClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (width === 67) {
      setWidth(190);
    } else if (width === 190) {
      setWidth(67);
    }
  }

  return (
    <div style={{ width: `${width}px` }} className={S.main}>
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
        <button className={S.expansionButton} onClick={handleExpansionClick}>
          {width === 67 ? (
            <Image
              src={DoubleArrowRight}
              alt="화살표 이미지"
              width={28}
              height={28}
            />
          ) : (
            <Image
              src={DoubleArrowLeft}
              alt="화살표 이미지"
              width={28}
              height={28}
            />
          )}
        </button>
      </div>
      <div className={S.dashBoardOuter}>
        <ul className={S.dashBoardContainer}>
          {dashboards &&
            dashboards.map((dashboard) => (
              <SideMenuItem
                dashboardId={dashboard.id}
                pageId={pageId}
                dashboardColor={dashboard.color}
                dashboardTitle={dashboard.title}
                createdByMe={dashboard.createdByMe}
                key={dashboard.id}
                width={width}
              />
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
      {isModalClicked && (
        <NewDashboardModal
          onClick={handleCancelClick}
          setAddFlag={setAddFlag}
        />
      )}
    </div>
  );
}

export default SideMenu;
