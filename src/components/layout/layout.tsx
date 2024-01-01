import DashboardHeader, {
  Colors,
} from '@/components/header/dashboardHeader/dashboardHeader';
import SideMenu from '@/components/sideMenu/SideMenu';
import S from '@/components/layout/layout.module.css';
import { ReactNode, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import QUERY_KEYS from '@/constants/queryKeys';
import { getUsers } from '@/api/user';
import { User } from '@/types/user';
import { randomNickNameColor } from '@/utils/utility';
import { MemberProps } from '@/types/Member';

interface LayoutProps {
  children: ReactNode;
  flag?: boolean;
  folder?: string;
  Owner?: boolean;
  active?: boolean;
  id?: string;
  member?: MemberProps[];
}

function Layout({
  children,
  flag,
  folder,
  Owner,
  active,
  id,
  member,
}: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<User>();
  const [color, setColor] = useState<Colors>('pink');
  const { data: userData } = useQuery({
    queryKey: [QUERY_KEYS.user],
    queryFn: () => getUsers(),
    enabled: true,
  });

  useEffect(() => {
    setUser(userData);
    if (!userData?.profileImageUrl) {
      const rc = randomNickNameColor();
      setColor(rc);
    }
  }, [userData]);

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
              user={{
                letter: user.nickname.slice(0, 1),
                name: user.nickname,
                profile: user.profileImageUrl,
                color: color,
              }}
              member={member}
              folder={folder}
              Owner={Owner}
              active={active}
              id={id}
            />
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
