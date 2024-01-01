import DeleteDashBoardButton from '@/components/button/dashBoard/delete/deleteDashBoardButton';
import ReturnButton from '@/components/button/dashBoard/return/returnButton';
import Layout from '@/components/layout/layout';
import NestedLayout from '@/components/layout/nestedLayout';
import EditDashboard from '@/components/table/editDashboard/editDashboard';
import InvitationList from '@/components/table/invitation/invitationList';
import MemberList from '@/components/table/member/memberList';
import S from '@/pages/[id]/mydashboard.module.css';
import { GetServerSidePropsContext } from 'next';
import { useEffect, useState } from 'react';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flag, setFlag] = useState(false);
  const [invitationFlag, setInvitationFlag] = useState(false);
  const [memberFlag, setMemberFlag] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // // 모달이 열릴 경우 백그라운드 스크롤 방지
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isModalOpen]);

  return (
    <Layout flag={flag}>
      <NestedLayout>
        <ReturnButton url={`/${dashboardId}`} />
        <div className={S.tableContainer}>
          <EditDashboard dashboardId={dashboardId} setFlag={setFlag} />
          <MemberList
            dashboardId={dashboardId}
            memberFlag={memberFlag}
            setMemberFlag={setMemberFlag}
          />
          <InvitationList
            dashboardId={dashboardId}
            onClick={handleModal}
            invitationFlag={invitationFlag}
            setInvitationFlag={setInvitationFlag}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
          <div className={S.marginDiv}></div>
          <DeleteDashBoardButton />
        </div>
      </NestedLayout>
    </Layout>
  );
}

export default DashboardEditPage;
