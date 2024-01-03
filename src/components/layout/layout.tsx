import DashboardHeader from '@/components/header/dashboardHeader/dashboardHeader';
import SideMenu from '@/components/sideMenu/SideMenu';
import S from '@/components/layout/layout.module.css';
import { ReactNode, useState, useEffect } from 'react';

interface LayoutProps {
  children: ReactNode;
  pageId?: string;
  flag?: boolean;
}

function Layout({ children, pageId, flag }: LayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <div className={S.container}>
          <SideMenu pageId={Number(pageId)} flag={flag} />

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
