import DashboardHeader from '@/components/header/dashboardHeader/dashboardHeader';
import SideMenu from '@/components/sideMenu/SideMenu';
import S from '@/components/layout/layout.module.css';
import { ReactNode, useState, useEffect } from 'react';

interface LayoutProps {
  children: ReactNode;
  flag?: boolean;
  folder?: string;
  Owner?: boolean;
}

function Layout({ children, flag, folder, Owner }: LayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <div className={S.container}>
          <SideMenu pageId={1} flag={flag} />

          <div className={S.sideBarContainer}>
            <DashboardHeader
              folder={folder}
              Owner={Owner}
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
