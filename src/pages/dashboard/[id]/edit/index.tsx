import DeleteDashBoardButton from '@/components/button/dashBoard/delete/deleteDashBoardButton';
import ReturnButton from '@/components/button/dashBoard/return/returnButton';
import Layout from '@/components/layout/layout';
import NestedLayout from '@/components/layout/nestedLayout';
import EditDashboard from '@/components/table/editDashboard/editDashboard';
import InvitationList from '@/components/table/invitation/invitationList';
import MemberList from '@/components/table/member/memberList';
import { instance } from '@/libs/api';
import S from '@/pages/dashboard/[id]/edit/dashboardEditPage.module.css';
import { AxiosResponse } from 'axios';
import { GetServerSidePropsContext } from 'next';
import { useEffect, useState } from 'react';

interface Dashboard {
  id: number;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (!context.params) {
    return {
      notFound: true,
    };
  }

  const dashboardId = context?.params['id'];

  const cookie = context.req.headers.cookie || '';
  const cookieString = cookie.slice(12, cookie.length);
  const headers = {
    Authorization: `Bearer ${cookieString}`,
  };

  try {
    const response: AxiosResponse = await instance({
      method: 'GET',
      url: 'https://sp-taskify-api.vercel.app/1-5/dashboards?navigationMethod=infiniteScroll&size=1000',
      headers: headers,
    });

    const dashboardIdList = response?.data?.dashboards.map((el: Dashboard) =>
      String(el.id),
    );

    if (!dashboardIdList.includes(dashboardId)) {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    alert(error);
  }

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
        <ReturnButton url={`dashboard/${dashboardId}`} />
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
          <DeleteDashBoardButton dashboardId={dashboardId} />
        </div>
      </NestedLayout>
    </Layout>
  );
}

export default DashboardEditPage;
