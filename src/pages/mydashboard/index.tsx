import { getDashboards } from '@/api/dashboard';
import CreateDashBoardButton from '@/components/button/dashBoard/create/createDashBoardButton';
import SideMenu from '@/components/sideMenu/SideMenu';
import S from '@/pages/mydashboard/index.module.css';
import { useState, useEffect } from 'react';
import DashBoardButton from '@/components/button/dashBoard/dashBoardButton';
import ArrowButton from '@/components/button/arrow/arrowButton';
import InvitedList from '@/components/table/invitedDashboard/invitedList';

function MyDashboard() {
  const [myBoard, setMyBoard] = useState();
  const pageCount = Math.floor(myBoard?.totalCount / 6);

  async function getDashboardsData() {
    try {
      const response = await getDashboards('pagination');
      setMyBoard(response.dashboards);
    } catch {}
  }

  useEffect(() => {
    getDashboardsData();
  }, []);

  return (
    <>
      <SideMenu pageId={2} />
      <div className={S.header}>헤더</div>
      <div className={S.boardContainer}>
        <div className={S.boardGrid}>
          <CreateDashBoardButton device="desktop" />
          {myBoard &&
            myBoard.map((board, index) => (
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
          {pageCount}페이지 중<ArrowButton size="large" />{' '}
        </div>
        <InvitedList />
      </div>
    </>
  );
}

export default MyDashboard;

// MyDashboard.getLayout = function getLayout(page) {
//   return (
//     <Layout >
//       {page}
//     </Layout>
//   )
// }
/* side, header layout 만들기 */
