import { getDashboards } from '@/api/dashboard';
import { getMembers } from '@/api/member';
import DeleteDashBoardButton from '@/components/button/dashBoard/delete/deleteDashBoardButton';
import ReturnButton from '@/components/button/dashBoard/return/returnButton';
import Layout from '@/components/layout/layout';
import EditDashboard from '@/components/table/editDashboard/editDashboard';
import InvitationList from '@/components/table/invitation/invitationList';
import MemberList from '@/components/table/member/memberList';
import QUERY_KEYS from '@/constants/queryKeys';
import S from '@/pages/dashboard/[id]/edit/dashboardEditPage.module.css';
import { MemberProps } from '@/types/Member';
import { useQuery } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import { useEffect, useState } from 'react';
import { instance } from '@/libs/api';
import { AxiosResponse } from 'axios';

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

  if (cookie === '') {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

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
    console.log(error);
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
  const [flag, setFlag] = useState(false);
  const [invitationFlag, setInvitationFlag] = useState(false);
  const [memberFlag, setMemberFlag] = useState(false);
  const [folderName, setFolderName] = useState();
  const [folderOwner, setFolderOwner] = useState();
  const [member, setMember] = useState<MemberProps[]>();
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.dashboards, dashboardId],
    queryFn: () => getDashboards({ id: dashboardId }),
    enabled: true,
  });

  const { data: memberData } = useQuery({
    queryKey: [QUERY_KEYS.member, dashboardId],
    queryFn: () => getMembers(dashboardId),
    enabled: true,
  });

  useEffect(() => {
    setFolderName(data?.title);
    setFolderOwner(data?.createdByMe);
  }, [data]);

  useEffect(() => {
    setMember(memberData?.members);
  }, [memberData]);

  return (
    <Layout
      folder={folderName}
      flag={flag}
      Owner={folderOwner}
      pageId={dashboardId}
      id={dashboardId}
      member={member}>
      <div className={S.nestedLayout}>
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
            invitationFlag={invitationFlag}
            setInvitationFlag={setInvitationFlag}
          />
          <div className={S.marginDiv}></div>
          <DeleteDashBoardButton dashboardId={dashboardId} />
        </div>
      </div>
    </Layout>
  );
}

export default DashboardEditPage;
