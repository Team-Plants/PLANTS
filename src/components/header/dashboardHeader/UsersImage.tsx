import NameBadge from '@/components/nameBadge/nameBadge';
import S from '@/components/header/dashboardHeader/usersImage.module.css';

interface UserImageProps {
  users: {
    color: 'yellow' | 'orange' | 'green' | 'blue' | 'brown' | 'pink';
    letter: string;
  }[];
}

function UsersImage({ users }: UserImageProps) {
  let layer: 'layer' | null;
  if (users.length > 1) {
    layer = 'layer';
  }

  return (
    <div className={S.container}>
      {users.slice(0, 4).map((user, index) => (
        <NameBadge
          key={index}
          color={user.color}
          letter={user.letter}
          layer={layer}
          index={index + 1}
        />
      ))}
    </div>
  );
}

export default UsersImage;
