import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getDashboards } from '@/api/dashboard';
import { DashBoardData } from '@/types/DashBoard';
import { withLayout } from '@/hooks/withAuth';
import S from '@/pages/mydashboard/index.module.css';
import Layout from '@/components/layout/layout';
import QUERY_KEYS from '@/constants/queryKeys';
import InvitedList from '@/components/table/invitedDashboard/invitedList';
import PaginationCreateDashboard from '@/components/button/dashBoard/create/paginationCreateDashboard/paginationCreateDashboard';
import CreateDashBoardButton from '@/components/button/dashBoard/create/createDashBoardButton';
import NewDashboardModal from '@/components/modal/newDashboardModal/newDashboardModal';

function MyDashboard() {
  const [DSize, setDSize] = useState(5);
  const [page, setPage] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dashboard, setDashboard] = useState<DashBoardData>();

  const { data: dashboardsData } = useQuery({
    queryKey: [QUERY_KEYS.dashboards, DSize, page],
    queryFn: () =>
      getDashboards({
        navigationMethod: 'pagination',
        size: DSize,
        page: page,
      }),
    enabled: true,
    placeholderData: dashboard,
  });

  function handleClick() {
    setIsOpenModal((prev) => !prev);
  }

  useEffect(() => {
    if (page > 1) {
      setDSize(6);
    } else if (page === 1) {
      setDSize(5);
    }
  }, [page]);

  useEffect(() => {
    setDashboard(dashboardsData);
  }, [dashboardsData]);

  return (
    <div className={S.nestedLayout}>
      {dashboard ? (
        <PaginationCreateDashboard
          dashboardData={dashboard}
          onClick={handleClick}
          page={page}
          setPage={setPage}
        />
      ) : (
        <CreateDashBoardButton onClick={handleClick} />
      )}
      <InvitedList />
      {isOpenModal && (
        <NewDashboardModal onClick={handleClick} redirect={false} />
      )}
    </div>
  );
}

export default withLayout(MyDashboard, Layout, {
  folder: '내 대시보드',
  active: false,
});
