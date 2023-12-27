import SideMenu from '@/components/sideMenu/SideMenu';
import S from '@/pages/mydashboard/index.module.css';
import InvitedList from '@/components/table/invitedDashboard/invitedList';
import PaginationCreateDashboard from '@/components/button/dashBoard/create/paginationCreateDashboard/paginationCreateDashboard';
import { getDashboards } from '@/api/dashboard';
import { DashBoardData } from '@/types/DashBoard';
import { getInvitations } from '@/api/invitations';
import { InvitedDashBoardProps } from '@/types/InvitedDashBoard';
import EmptyInvitation from '@/components/table/invitedDashboard/emptyInvitation/emptyInvitation';

export async function getServerSideProps() {
  const dashboardData = await getDashboards('pagination');
  const response = await getInvitations();
  const invitedData = response.invitations;

  return {
    props: {
      dashboardData,
      invitedData,
    },
  };
}

interface MyDashBoardProps {
  dashboardData: DashBoardData;
  invitedData: InvitedDashBoardProps[];
}

function MyDashboard({ dashboardData, invitedData }: MyDashBoardProps) {
  return (
    <>
      <SideMenu pageId={2} />
      <div className={S.header}>헤더</div>
      <div className={S.boardContainer}>
        <PaginationCreateDashboard dashboardData={dashboardData} />
        {invitedData ? (
          <InvitedList invitations={invitedData} />
        ) : (
          <EmptyInvitation />
        )}
      </div>
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
