import { GetServerSidePropsContext } from 'next';
import S from '@/pages/[id]/mydashboard.module.css';
import SideMenu from '@/components/sideMenu/SideMenu';

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
        <div className={S.mainContainer}>돌아가기 버튼</div>
      </div>
    </div>
  );
}

export default DashboardEditPage;
