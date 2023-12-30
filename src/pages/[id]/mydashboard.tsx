import DeleteDashBoardButton from '@/components/button/dashBoard/delete/deleteDashBoardButton';
import ReturnButton from '@/components/button/dashBoard/return/returnButton';
import DashboardHeader from '@/components/header/dashboardHeader/dashboardHeader';
import SideMenu from '@/components/sideMenu/SideMenu';
import EditDashboard from '@/components/table/editDashboard/editDashboard';
import InvitationList from '@/components/table/invitation/invitationList';
import MemberList from '@/components/table/member/memberList';
import S from '@/pages/[id]/mydashboard.module.css';
import { GetServerSidePropsContext } from 'next';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (!context.params) {
    return {
      notFound: true,
    };
  }

  const dashboardId = context?.params['id'];

  return {
    props: {
      dashboardId,
    },
  };
}

interface DashboardEditPageProps {
  dashboardId: string;
}

function DashboardEditPage({ dashboardId }: DashboardEditPageProps) {
  return (
    <div className={S.mainOuter}>
      <SideMenu pageId={Number(dashboardId)} />
      <div className={S.main}>
        <DashboardHeader
          folder="1"
          users={[]}
          user={{
            letter: '1',
            name: 'kim',
            color: 'yellow',
            ownerFolder: { folder: '1' },
          }}
        />
        <div className={S.mainContainer}>
          <ReturnButton url={`/${dashboardId}`} />
          <div className={S.tableContainer}>
            <EditDashboard />
            <MemberList members={[]} />
            <InvitationList invitations={[]} />
            <div className={S.marginDiv}></div>
            <DeleteDashBoardButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardEditPage;
