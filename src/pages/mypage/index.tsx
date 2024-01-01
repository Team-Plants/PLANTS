import Layout from '@/components/layout/layout';
import NestedLayout from '@/components/layout/nestedLayout';
import PasswordTable from '@/components/table/password/passwordTable';
import ProfileTable from '@/components/table/profile/profileTable';
import { SignFormValuesType } from '@/types/SignFormValue';
import { ReactElement } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

function Mypage() {
  const methods = useForm<SignFormValuesType>({ mode: 'onChange' });
  const handleSubmit = (data: SignFormValuesType) => {
    console.log(data);
  };

  return (
    <>
      {/* 돌아가기 버튼 넣기 */}
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <ProfileTable />
          <PasswordTable />
        </form>
      </FormProvider>
    </>
  );
}

export default Mypage;

Mypage.getLayout = (page: ReactElement) => {
  return (
    <Layout folder="계정관리">
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
