import SideMenu from '@/components/sideMenu/SideMenu';
import S from '@/pages/mydashboard/index.module.css';
import InvitedList from '@/components/table/invitedDashboard/invitedList';
import PaginationCreateDashboard from '@/components/button/dashBoard/create/paginationCreateDashboard/paginationCreateDashboard';

function MyDashboard() {
  return (
    <>
      <SideMenu pageId={2} />
      <div className={S.header}>헤더</div>
      <div className={S.boardContainer}>
        <PaginationCreateDashboard />
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
