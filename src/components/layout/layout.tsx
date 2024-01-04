import DashboardHeader, {
  Colors,
} from '@/components/header/dashboardHeader/dashboardHeader';
import SideMenu from '@/components/sideMenu/SideMenu';
import S from '@/components/layout/layout.module.css';
import { ReactNode, useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import QUERY_KEYS from '@/constants/queryKeys';
import { getUsers } from '@/api/user';
import { randomNickNameColor } from '@/utils/utility';
import { MemberProps } from '@/types/Member';

export interface LayoutProps {
  children: ReactNode;
  pageId?: string;
  flag?: boolean;
  folder?: string;
  Owner?: boolean;
  active?: boolean;
  id?: string;
  member?: MemberProps[];
}

function Layout({
  children,
  pageId,
  flag,
  folder,
  Owner,
  active = true,
  id,
  member,
}: LayoutProps) {
  const mounted = useRef(false);
  const [refreshFlag, setRefreshFlag] = useState(false);
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
    if (!mounted.current) {
      mounted.current = true;
      setRefreshFlag(true);
    }
  }, []);

  return (
    <>
      {mounted && userData && (
        <div className={S.container}>
          <SideMenu
            pageId={Number(pageId)}
            initialPage={1}
            flag={flag}
            refreshFlag={refreshFlag}
          />

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
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
