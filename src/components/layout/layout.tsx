import DashboardHeader from '@/components/header/dashboardHeader/dashboardHeader';
import SideMenu from '@/components/sideMenu/SideMenu';
import S from '@/components/layout/layout.module.css';
import { ReactNode, useState, useEffect } from 'react';

function Layout({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
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
                { letter: 'a', color: 'yellow' },
              ]}
              user={{
                letter: 'B',
                name: '수빈',
                color: 'green',
                ownerFolder: {
                  folder: ' 비브리지',
                },
              }}
            />
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
