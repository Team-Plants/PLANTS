import { Dispatch, SetStateAction } from 'react';
import { DashBoardData } from '@/types/DashBoard';
import DashBoardButton from '@/components/button/dashBoard/dashBoardButton';
import PaginationArrowButton from '@/components/button/arrow/paginationArrowButton';
import CreateDashBoardButton from '@/components/button/dashBoard/create/createDashBoardButton';
import S from '@/components/button/dashBoard/create/paginationCreateDashboard/paginationCreateDashboard.module.css';

interface PaginationCreateDashboardProps {
  dashboardData: DashBoardData;
  onClick: () => void;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

function PaginationCreateDashboard({
  dashboardData,
  onClick,
  page,
  setPage,
}: PaginationCreateDashboardProps) {
  const { dashboards, totalCount } = dashboardData;
  const totalPage = Math.ceil((totalCount + 1) / 6);

  return (
    <>
      <div className={S.boardGrid}>
        {page === 1 && <CreateDashBoardButton onClick={onClick} />}
        {dashboards &&
          dashboards.map((board, index) => (
            <DashBoardButton
              key={index}
              content={board.title}
              color={board.color}
              madeByOwner={board.createdByMe}
              dashboardId={board.id}
            />
          ))}
      </div>
      <div className={S.pagination}>
        {totalPage} 페이지 중 {page}
        <PaginationArrowButton
          size="small"
          totalPage={totalPage}
          page={page}
          setPage={setPage}
        />
      </div>
    </>
  );
}

export default PaginationCreateDashboard;
