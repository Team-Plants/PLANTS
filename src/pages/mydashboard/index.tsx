import { useEffect, useState, ReactElement } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getDashboards } from '@/api/dashboard';
import { getInvitations } from '@/api/invitations';
import { DashBoardData } from '@/types/DashBoard';
import { InvitedDashBoardProps } from '@/types/InvitedDashBoard';
import QUERY_KEYS from '@/constants/queryKeys';
import InvitedList from '@/components/table/invitedDashboard/invitedList';
import PaginationCreateDashboard from '@/components/button/dashBoard/create/paginationCreateDashboard/paginationCreateDashboard';
import EmptyInvitation from '@/components/table/invitedDashboard/emptyInvitation/emptyInvitation';
import Layout from '@/components/layout/layout';
import NestedLayout from '@/components/layout/nestedLayout';
import CreateDashBoardButton from '@/components/button/dashBoard/create/createDashBoardButton';
import NewDashboardModal from '@/components/modal/newDashboardModal/newDashboardModal';

function MyDashboard() {
  const [size, setSize] = useState(5);
  const [page, setPage] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dashboard, setDashboard] = useState<DashBoardData>();
  const [invitation, setInvitation] = useState<InvitedDashBoardProps[]>();

  const { data: dashboardsData } = useQuery({
    queryKey: [QUERY_KEYS.dashboards, size, page],
    queryFn: () => getDashboards('pagination', size, page),
    enabled: true,
  });

  const { data: invitationsData } = useQuery({
    queryKey: [QUERY_KEYS.invitations],
    queryFn: () => getInvitations(),
    enabled: true,
  });

  function handleClick() {
    setIsOpenModal((prev) => !prev);
  }

  useEffect(() => {
    if (page > 1) {
      setSize(6);
    } else if (page === 1) {
      setSize(5);
    }
  }, [page]);

  useEffect(() => {
    setDashboard(dashboardsData);
  }, [dashboardsData]);

  useEffect(() => {
    setInvitation(invitationsData?.invitations);
  }, [invitationsData]);

  return (
    <>
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
      {invitation ? (
        <InvitedList invitations={invitation} />
      ) : (
        <EmptyInvitation />
      )}
      {isOpenModal && (
        <NewDashboardModal onClick={handleClick} redirect={false} />
      )}
    </>
  );
}

export default MyDashboard;

MyDashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
