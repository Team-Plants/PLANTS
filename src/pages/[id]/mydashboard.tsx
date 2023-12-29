import DeleteDashBoardButton from '@/components/button/dashBoard/delete/deleteDashBoardButton';
import ReturnButton from '@/components/button/dashBoard/return/returnButton';
import DashboardHeader from '@/components/header/dashboardHeader/dashboardHeader';
import SideMenu from '@/components/sideMenu/SideMenu';
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
    <div className={S.mainOuter}>
      <SideMenu pageId={Number(dashboardId)} flag={flag} />
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
        </div>
      </div>
    </div>
  );
}

export default DashboardEditPage;
