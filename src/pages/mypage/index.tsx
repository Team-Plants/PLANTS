import ReturnButton from '@/components/button/dashBoard/return/returnButton';
import Layout from '@/components/layout/layout';
import PasswordTable from '@/components/table/password/passwordTable';
import ProfileTable from '@/components/table/profile/profileTable';
import S from '@/pages/mypage/mypage.module.css';
import { SignFormValuesType } from '@/types/SignFormValue';
import { withLayout } from '@/hooks/withAuth';
import { FormProvider, useForm } from 'react-hook-form';

function Mypage() {
  const methods = useForm<SignFormValuesType>({ mode: 'onChange' });

  return (
    <>
      <ReturnButton url="/boards" />
      <FormProvider {...methods}>
        <div className={S.formContainer}>
          <ProfileTable />
          <PasswordTable />
        </div>
      </FormProvider>
    </>
  );
}

export default withLayout(Mypage, Layout, {
  folder: '계정관리',
  active: false,
});
