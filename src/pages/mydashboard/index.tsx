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
import AddTodoModal from '@/components/modal/addTodoModal/addTodoModal';

function MyDashboard() {
  const [dashboards, setDashboards] = useState<DashBoardData>();
  const [invitation, setInvitation] = useState<InvitedDashBoardProps[]>();

  async function getDashboardsData() {
    const dashboardData = await getDashboards('pagination');
    setDashboards(dashboardData);
    const response = await getInvitations();
    const invitedData = response.invitations;
    setInvitation(invitedData);
  }
  const [modalOpen, setModalOpen] = useState(false);
  function handleClick() {
    setModalOpen((prev) => !prev);
  }

  useEffect(() => {
    getDashboardsData();
  }, []);

  return (
    <>
      <SideMenu pageId={2} />
      <div className={S.header} onClick={handleClick}>
        헤더
      </div>
      <div className={S.boardContainer}>
        {dashboards && <PaginationCreateDashboard dashboardData={dashboards} />}
        {invitation ? (
          <InvitedList invitations={invitation} />
        ) : (
          <EmptyInvitation />
        )}
      </div>
      {modalOpen && <AddTodoModal onClick={handleClick} />}
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
