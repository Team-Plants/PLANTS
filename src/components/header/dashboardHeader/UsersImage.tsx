import NameBadge from '@/components/nameBadge/nameBadge';
import MediaQuery from 'react-responsive';
import S from '@/components/header/dashboardHeader/usersImage.module.css';

export interface Users {
  color: 'yellow' | 'orange' | 'green' | 'blue' | 'brown' | 'pink';
  letter: string;
}

interface UserImageProps {
  users: Users[];
}

function UsersImage({ users }: UserImageProps) {
  let layer: 'layer' | null;
  if (users.length > 1) {
    layer = 'layer';
  } else {
    layer = null;
  }

  const small = users.length - 2;
  const big = users.length - 4;

  return (
    <div className={S.container}>
      {users.slice(0, 2).map((user, index) => (
        <NameBadge
          key={index}
          color={user.color}
          letter={user.letter}
          layer={layer}
          index={index + 1}
        />
      ))}
      <MediaQuery minWidth={1200}>
        {(matches) =>
          matches &&
          users
            .slice(2, 4)
            .map((user, index) => (
              <NameBadge
                key={index}
                color={user.color}
                letter={user.letter}
                layer={layer}
                index={index + 3}
              />
            ))
        }
      </MediaQuery>
      {users[2] && (
        <MediaQuery maxWidth={1199}>
          {(matches) =>
            matches && (
              <NameBadge
                color={users[2].color}
                letter={`${'+'} ${small}`}
                layer={layer}
                index={3}
              />
            )
          }
        </MediaQuery>
      )}
      {users[4] && (
        <MediaQuery minWidth={1200}>
          {(matches) =>
            matches && (
              <NameBadge
                color={users[4].color}
                letter={`${'+'} ${big}`}
                layer={layer}
                index={5}
              />
            )
          }
        </MediaQuery>
      )}
    </div>
  );
}

export default UsersImage;
