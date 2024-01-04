import ReturnButton from '@/components/button/dashBoard/return/returnButton';
import Layout from '@/components/layout/layout';
import PasswordTable from '@/components/table/password/passwordTable';
import ProfileTable from '@/components/table/profile/profileTable';
import S from '@/pages/mypage/mypage.module.css';
import { withLayout } from '@/hooks/withAuth';

function Mypage() {
  return (
    <div className={S.nestedLayout}>
      <ReturnButton url="/boards" />
      <div>
        <div className={S.formContainer}>
          <ProfileTable />
          <PasswordTable />
        </div>
      </div>
    </div>
  );
}

export default withLayout(Mypage, Layout, {
  folder: '계정관리',
  active: false,
});
