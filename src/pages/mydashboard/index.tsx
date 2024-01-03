import InvitedList from '@/components/table/invitedDashboard/invitedList';
import PaginationCreateDashboard from '@/components/button/dashBoard/create/paginationCreateDashboard/paginationCreateDashboard';
import { getDashboards } from '@/api/dashboard';
import { DashBoardData } from '@/types/DashBoard';
import { getInvitations } from '@/api/invitations';
import { InvitedDashBoardProps } from '@/types/InvitedDashBoard';
import EmptyInvitation from '@/components/table/invitedDashboard/emptyInvitation/emptyInvitation';
import { useEffect, useState } from 'react';
import Layout from '@/components/layout/layout';
import { withLayout } from '@/hooks/withAuth';

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

  useEffect(() => {
    getDashboardsData();
  }, []);

  return (
    <>
      {dashboards && <PaginationCreateDashboard dashboardData={dashboards} />}
      {invitation ? (
        <InvitedList invitations={invitation} />
      ) : (
        <EmptyInvitation />
      )}
    </>
  );
}

export default withLayout(MyDashboard, Layout, {
  folder: '내 대시보드',
  active: false,
});
