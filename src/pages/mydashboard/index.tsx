import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getDashboards } from '@/api/dashboard';
import { getInvitations } from '@/api/invitations';
import { DashBoardData } from '@/types/DashBoard';
import { InvitedDashBoardProps } from '@/types/InvitedDashBoard';
import QUERY_KEYS from '@/constants/queryKeys';
import SideMenu from '@/components/sideMenu/SideMenu';
import InvitedList from '@/components/table/invitedDashboard/invitedList';
import PaginationCreateDashboard from '@/components/button/dashBoard/create/paginationCreateDashboard/paginationCreateDashboard';
import EmptyInvitation from '@/components/table/invitedDashboard/emptyInvitation/emptyInvitation';
import CreateDashBoardButton from '@/components/button/dashBoard/create/createDashBoardButton';
import NewDashboardModal from '@/components/modal/newDashboardModal/newDashboardModal';
import S from '@/pages/mydashboard/index.module.css';
import DashboardHeader from '@/components/header/dashboardHeader/dashboardHeader';

function MyDashboard() {
  const [mounted, setMounted] = useState(false);
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
    setMounted(true);
  }, []);

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
    mounted && (
      <div className={S.container}>
        <SideMenu pageId={1} />

        <div className={S.sideBarContainer}>
          <DashboardHeader
            folder="계정관리"
            users={[
              {
                letter: 'a',
                color: 'yellow',
              },
              {
                letter: 'a',
                color: 'yellow',
              },
              {
                letter: 'a',
                color: 'yellow',
              },
            ]}
            user={{
              letter: 'B',
              name: '수빈',
              color: 'green',
              ownerFolder: {
                folder: '비브리지',
              },
            }}
          />
          <div className={S.itemContainer}>
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
        </div>
      </div>
    )
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
