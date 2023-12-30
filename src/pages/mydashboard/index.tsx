import SideMenu from '@/components/sideMenu/SideMenu';
import InvitedList from '@/components/table/invitedDashboard/invitedList';
import PaginationCreateDashboard from '@/components/button/dashBoard/create/paginationCreateDashboard/paginationCreateDashboard';
import { getDashboards } from '@/api/dashboard';
import { DashBoardData } from '@/types/DashBoard';
import { getInvitations } from '@/api/invitations';
import { InvitedDashBoardProps } from '@/types/InvitedDashBoard';
import EmptyInvitation from '@/components/table/invitedDashboard/emptyInvitation/emptyInvitation';
import S from '@/pages/mydashboard/index.module.css';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import QUERY_KEYS from '@/constants/queryKeys';
import NewDashboardModal from '@/components/modal/newDashboardModal/newDashboardModal';
import CreateDashBoardButton from '@/components/button/dashBoard/create/createDashBoardButton';

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
      <SideMenu pageId={2} />
      <div className={S.header}>헤더</div>
      <div className={S.boardContainer}>
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
      </div>
      {isOpenModal && (
        <NewDashboardModal onClick={handleClick} redirect={false} />
      )}
    </> //레이아웃 만들고 없앨 프래그먼트
  );
}

export default MyDashboard;

// MyDashboard.getLayout = function getLayout(page) {
//   return (
//     <Layout >
//       {page}
//     </Layout>
//   )
// }
/* side, header layout 만들기 */
