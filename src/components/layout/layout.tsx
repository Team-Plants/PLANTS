import DashboardHeader from '@/components/header/dashboardHeader/dashboardHeader';
import SideMenu from '@/components/sideMenu/SideMenu';
import S from '@/components/layout/layout.module.css';
import { ReactNode, useState, useEffect } from 'react';
import NestedLayout from './nestedLayout';
import { useRouter } from 'next/router';

export interface LayoutProps {
  children: ReactNode;
  flag?: boolean;
}

function Layout({ children, flag }: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [isBoardPage, setIsBoardPage] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    setMounted(true);
    if (pathname === '/boards') {
      setIsBoardPage(true);
    }
  }, [pathname]);

  return (
    <>
      {mounted && (
        <div className={S.container}>
          <SideMenu pageId={1} flag={flag} />

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
            {isBoardPage ? (
              <>{children}</>
            ) : (
              <NestedLayout>{children}</NestedLayout>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
