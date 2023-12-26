import { GetServerSidePropsContext } from 'next';
import S from '@/pages/[id]/mydashboard.module.css';
import SideMenu from '@/components/sideMenu/SideMenu';
import Image from 'next/image';
import ArrowLeftImage from '@/assets/icons/ArrowLeft.svg';
import { MouseEvent } from 'react';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  function handleReturnClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    router.push(`/${dashboardId}`);
  }

  return (
    <div className={S.mainOuter}>
      <SideMenu pageId={Number(dashboardId)} />
      <div className={S.main}>
        {/* 헤더 컴포넌트 위치 */}헤더
        <div className={S.mainContainer}>
          <button className={S.returnButton} onClick={handleReturnClick}>
            <Image
              src={ArrowLeftImage}
              alt="돌아가기 버튼 이미지"
              width={18}
              height={18}
            />
            돌아가기
          </button>
          <div>대시보드 수정 섹터</div>
          <div>구성원 섹터</div>
          <div>초대 내역 섹터</div>
          <div>대시보드 삭제하기 버튼</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardEditPage;
