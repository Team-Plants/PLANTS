import DashboardHeader, {
  Colors,
} from '@/components/header/dashboardHeader/dashboardHeader';
import SideMenu from '@/components/sideMenu/SideMenu';
import S from '@/components/layout/layout.module.css';
import { ReactNode, useState, useEffect, useRef, SetStateAction } from 'react';
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
  secondAddFlag?: boolean;
  setSecondAddFlag?: React.Dispatch<SetStateAction<boolean>>;
  isEditButtonActive?: boolean;
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
  secondAddFlag,
  setSecondAddFlag,
  isEditButtonActive,
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
          <div className={S.sideMenuContainer}>
            <SideMenu
              pageId={Number(pageId)}
              initialPage={1}
              flag={flag}
              refreshFlag={refreshFlag}
              secondAddFlag={secondAddFlag}
              setSecondAddFlag={setSecondAddFlag}
            />
          </div>
          <div className={S.headerContainer}>
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
              isEditButtonActive={isEditButtonActive}
            />
          </div>
          <div className={S.childrenContainer}>{children}</div>
        </div>
      )}
    </>
  );
}

export default Layout;
