import CreateDashBoardButton from '@/components/button/dashBoard/create/createDashBoardButton';
import DashBoardButton from '@/components/button/dashBoard/dashBoardButton';
import ArrowButton from '@/components/button/arrow/arrowButton';
import S from '@/components/button/dashBoard/create/paginationCreateDashboard/paginationCreateDashboard.module.css';
import { DashBoardData } from '@/types/DashBoard';

interface PaginationCreateDashboardProps {
  dashboardData: DashBoardData;
}

function PaginationCreateDashboard({
  dashboardData,
}: PaginationCreateDashboardProps) {
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
