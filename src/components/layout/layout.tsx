import DashboardHeader, {
  Colors,
} from '@/components/header/dashboardHeader/dashboardHeader';
import SideMenu from '@/components/sideMenu/SideMenu';
import S from '@/components/layout/layout.module.css';
import { ReactNode, useState, useEffect } from 'react';
import NestedLayout from './nestedLayout';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import QUERY_KEYS from '@/constants/queryKeys';
import { getUsers } from '@/api/user';
import { Assign } from '@/types/Assign';
import { randomNickNameColor } from '@/utils/utility';
import { MemberProps } from '@/types/Member';

export interface LayoutProps {
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
  const [isBoardPage, setIsBoardPage] = useState(false);
  const { pathname } = useRouter();
  const [color, setColor] = useState<Colors>('pink');
  const { data: userData } = useQuery({
    queryKey: [QUERY_KEYS.user],
    queryFn: () => getUsers(),
  });

  useEffect(() => {
    if (!userData?.profileImageUrl) {
      const rc = randomNickNameColor();
      setColor(rc);
    }
  }, [userData]);

  useEffect(() => {
    setMounted(true);
    if (pathname === '/boards') {
      setIsBoardPage(true);
    }
  }, [pathname]);

  return (
    <>
      {mounted && userData && (
        <div className={S.container}>
          <SideMenu pageId={1} flag={flag} />

          <div className={S.sideBarContainer}>
            <DashboardHeader
              user={{
                letter: userData.nickname.slice(0, 1),
                name: userData.nickname,
                profile: userData.profileImageUrl,
                color: color,
              }}
              member={member}
              folder={folder}
              Owner={Owner}
              active={active}
              id={id}
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
