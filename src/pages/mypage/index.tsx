import Button from '@/components/button/button';
import ReturnButton from '@/components/button/dashBoard/return/returnButton';
import Layout from '@/components/layout/layout';
import PasswordTable from '@/components/table/password/passwordTable';
import ProfileTable from '@/components/table/profile/profileTable';
import { withLayout } from '@/hooks/withAuth';
import S from '@/pages/mypage/mypage.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';

function Mypage() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const result = await axios.get('/api/logout');
      alert(result.data.message);
      router.push('/');
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className={S.nestedLayout}>
      <div className={S.topContainer}>
        <ReturnButton url="/mydashboard" />
        <Button content="로그아웃" status="primary" onClick={handleLogout} />
      </div>

      <div className={S.formContainer}>
        <ProfileTable />
        <PasswordTable />
      </div>
    </div>
  );
}

export default withLayout(Mypage, Layout, {
  folder: '계정관리',
  active: false,
});
