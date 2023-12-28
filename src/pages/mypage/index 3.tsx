import DashboardHeader from '@/components/header/dashboardHeader/dashboardHeader';
import SideMenu from '@/components/sideMenu/SideMenu';
import PasswordTable from '@/components/table/password/passwordTable';
import ProfileTable from '@/components/table/profile/profileTable';
import S from '@/pages/mypage/mypage.module.css';
import { SignFormValuesType } from '@/types/SignFormValue';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

function Mypage() {
  const [mounted, setMounted] = useState(false);
  const methods = useForm<SignFormValuesType>({ mode: 'onChange' });
  const handleSubmit = (data: SignFormValuesType) => {
    console.log(data);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
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
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(handleSubmit)}>
                <ProfileTable />
                <PasswordTable />
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    )
  );
}

export default Mypage;
