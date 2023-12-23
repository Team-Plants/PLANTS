import S from '@/components/header/dashboardHeader/dashboardHeader.module.css';
import Image from 'next/image';
import NameBadge from '@/components/nameBadge/nameBadge';
import UsersImage from '@/components/header/dashboardHeader/UsersImage';
import VectorImg from '@/assets/icons/Vector.svg';
import SettingImg from '@/assets/icons/Setting.svg';
import AddImg from '@/assets/icons/AddBox.svg';

interface DashboardProps {
  folder: string;
  users: {
    letter: string;
    color: 'yellow' | 'orange' | 'green' | 'blue' | 'brown' | 'pink';
  }[];
  user: {
    letter: string;
    color: 'yellow' | 'orange' | 'green' | 'blue' | 'brown' | 'pink';
    ownerFolder: string[];
  };
}

function DashboardHeader({ folder, users, user }: DashboardProps) {
  return (
    <div className={S.container}>
      <p className={S.folderName}>
        {user.ownerFolder[folder] === folder ? '👑`${folder}`' : folder}
      </p>
      <div className={S.buttonContainer}>
        <button className={S.button}>
          <Image
            className={S.buttonImg}
            src={SettingImg}
            width={20}
            height={20}
            alt="관리하기"
          />{' '}
          관리하기
        </button>
        <button className={S.button}>
          <Image
            className={S.buttonImg}
            src={AddImg}
            width={20}
            height={20}
            alt="초대하기"
          />{' '}
          초대하기{' '}
        </button>
      </div>
      {users && <UsersImage users={users} />}
      <Image className={S.vectorImage} src={VectorImg} alt="구분이미지" />
      {user && <NameBadge color={user.color} letter={user.letter} />}
    </div>
  );
}

export default DashboardHeader;
