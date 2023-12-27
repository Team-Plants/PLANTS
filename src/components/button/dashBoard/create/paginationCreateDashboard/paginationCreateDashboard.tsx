import { getDashboards } from '@/api/dashboard';
import CreateDashBoardButton from '@/components/button/dashBoard/create/createDashBoardButton';
import DashBoardButton from '@/components/button/dashBoard/dashBoardButton';
import ArrowButton from '@/components/button/arrow/arrowButton';
import { DashBoardData } from '@/types/DashBoard';
import S from '@/components/button/dashBoard/create/paginationCreateDashboard/paginationCreateDashboard.module.css';

export async function getServerSideProps() {
  const dashboardData = await getDashboards('pagination');

  return {
    props: {
      dashboardData,
    },
  };
}

interface DashBoardProps {
  dashboardData: DashBoardData;
}

function PaginationCreateDashboard({ dashboardData }: DashBoardProps) {
  const { dashboards, totalCount } = dashboardData;
  const pageCount = Math.ceil((totalCount + 1) / 6);

  return (
    <>
      <div className={S.boardGrid}>
        <CreateDashBoardButton device="desktop" />
        {dashboards &&
          dashboards.map((board, index) => (
            <DashBoardButton
              key={index}
              content={board.title}
              color={board.color}
              madeByOwner={true}
              device="desktop"
            />
          ))}
      </div>
      <div className={S.pagination}>
        {pageCount} 페이지 중<ArrowButton size="large" />{' '}
      </div>
    </>
  );
}

export default PaginationCreateDashboard;
