import { GetServerSidePropsContext } from 'next';
import S from '@/pages/[id]/mydashboard.module.css';
import SideMenu from '@/components/sideMenu/SideMenu';
import DeleteDashBoardButton from '@/components/button/dashBoard/delete/deleteDashBoardButton';
import ReturnButton from '@/components/button/dashBoard/return/returnButton';
import InvitationList from '@/components/table/invitation/invitationList';
import MemberList from '@/components/table/member/memberList';

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
        {/* 헤더 컴포넌트 위치 */}헤더
        <div className={S.mainContainer}>
          <ReturnButton url={`/${dashboardId}`} />
          <div>대시보드 수정 섹터</div>
          <MemberList members={[]} />
          <InvitationList invitations={[]} />
          <div className={S.marginDiv}></div>
          <DeleteDashBoardButton device="mobile" />
        </div>
      </div>
    </div>
  );
}

export default DashboardEditPage;
