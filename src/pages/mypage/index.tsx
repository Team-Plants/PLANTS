import DashboardHeader from '@/components/header/dashboardHeader/dashboardHeader';
import SideMenu from '@/components/sideMenu/SideMenu';
import PasswordTable from '@/components/table/password/passwordTable';
import ProfileTable from '@/components/table/profile/profileTable';
import S from '@/pages/mypage/mypage.module.css';

function Mypage() {
  return (
    <div className={S.container}>
      <SideMenu pageId={1} />

      <div className={S.sideBarContainer}>
        <DashboardHeader
          folder="계정관리"
          users={[
            {
              letter: 'a',
              color: 'yellow',
            },
            {
              letter: 'a',
              color: 'yellow',
            },
            {
              letter: 'a',
              color: 'yellow',
            },
          ]}
          user={{
            letter: 'B',
            name: '수빈',
            color: 'green',
            ownerFolder: {
              folder: '비브리지',
            },
          }}
        />
        <div className={S.itemContainer}>
          {/* 돌아가기 버튼 넣기 */}
          <ProfileTable />
          <PasswordTable />
        </div>
      </div>
    </div>
  );
}

export default Mypage;
