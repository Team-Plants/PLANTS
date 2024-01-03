import { postProfileImage } from '@/api/mypage';
import ReturnButton from '@/components/button/dashBoard/return/returnButton';
import Layout from '@/components/layout/layout';
import NestedLayout from '@/components/layout/nestedLayout';
import PasswordTable from '@/components/table/password/passwordTable';
import ProfileTable from '@/components/table/profile/profileTable';
import S from '@/pages/mypage/mypage.module.css';
import { SignFormValuesType } from '@/types/SignFormValue';
import { useQuery } from '@tanstack/react-query';
import { ReactElement } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

function Mypage() {
  const methods = useForm<SignFormValuesType>({ mode: 'onChange' });

  const handleSubmit = (data: SignFormValuesType) => {
    console.log(data);
  };

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

export default Mypage;

Mypage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
