import S from '@/components/header/dashboardHeader/dashboardHeader.module.css';
import Image from 'next/image';
import NameBadge, { Colors } from '@/components/nameBadge/nameBadge';
import UsersImage, {
  Users,
} from '@/components/header/dashboardHeader/UsersImage';
import VectorImg from '@/assets/icons/Vector.svg';
import SettingImg from '@/assets/icons/Setting.svg';
import AddImg from '@/assets/icons/AddBox.svg';
import CrownImg from '@/assets/icons/Crown.svg';
import Link from 'next/link';
import { useState } from 'react';
import TodoInvite from '@/components/modal/todoInvite/todoInvite';

interface DashboardProps {
  users: Users[];
  user: {
    letter: string;
    name: string;
    color: Colors;
  };
  folder?: string;
  Owner?: boolean;
  active?: boolean;
  id?: string;
}

function DashboardHeader({
  users,
  user,
  folder,
  Owner = false,
  active = true,
  id,
}: DashboardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClick() {
    setIsModalOpen((prev) => !prev);
  }
  return (
    <div className={S.container}>
      <p className={S.folderName}>
        {folder}
        {Owner && (
          <Image
            src={CrownImg}
            alt="내가 만든 보드 표시"
            width={20}
            height={16}></Image>
        )}
      </p>
      <div className={S.buttonContainer}>
        {Owner && active && (
          <>
            <Link href={`${id ? `/${id}` : ''}/mydashboard`}>
              <button className={S.button}>
                <Image
                  className={S.buttonImg}
                  src={SettingImg}
                  width={20}
                  height={20}
                  alt="관리하기"
                />
                관리
              </button>
            </Link>
            <button className={S.button} onClick={handleClick}>
              <Image
                className={S.buttonImg}
                src={AddImg}
                width={20}
                height={20}
                alt="초대하기"
              />
              초대하기
            </button>
          </>
        )}
      </div>
      {Owner && users && <UsersImage users={users} />}
      {active && (
        <Image className={S.vectorImage} src={VectorImg} alt="구분이미지" />
      )}
      {user && (
        <>
          <NameBadge color={user.color} letter={user.letter} />
          <p className={S.userName}>{user.name}</p>
        </>
      )}
      {isModalOpen && <TodoInvite onClick={handleClick} dashboardId={id} />}
    </div>
  );
}

export default DashboardHeader;
