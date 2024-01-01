import DashboardHeader from '@/components/header/dashboardHeader/dashboardHeader';
import SideMenu from '@/components/sideMenu/SideMenu';
import S from '@/components/layout/layout.module.css';
import { ReactNode, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import QUERY_KEYS from '@/constants/queryKeys';
import { getUsers } from '@/api/user';
import { User } from '@/types/user';
import { randomChipColor, randomNickNameColor } from '@/utils/utility';
import { Colors } from '../nameBadge/nameBadge';

interface LayoutProps {
  children: ReactNode;
  flag?: boolean;
  folder?: string;
  Owner?: boolean;
  active?: boolean;
  id?: string;
}

function Layout({ children, flag, folder, Owner, active, id }: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<User>();
  const [color, setColor] = useState<Colors>('pink');
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.user],
    queryFn: () => getUsers(),
    enabled: true,
  });

  useEffect(() => {
    setUser(data);
    const rc = randomNickNameColor();
    setColor(rc);
  }, [data]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && user && (
        <div className={S.container}>
          <SideMenu pageId={1} flag={flag} />

          <div className={S.sideBarContainer}>
            <DashboardHeader
              folder={folder}
              Owner={Owner}
              active={active}
              id={id}
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
                letter: user.nickname.slice(0, 1),
                name: user.nickname,
                color: color,
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
