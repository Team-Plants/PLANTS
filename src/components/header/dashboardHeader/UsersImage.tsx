import NameBadge from '@/components/nameBadge/nameBadge';
import MediaQuery from 'react-responsive';
import S from '@/components/header/dashboardHeader/usersImage.module.css';
import { MemberProps } from '@/types/Member';
import { randomNickNameColor } from '@/utils/utility';
interface UserImageProps {
  member: MemberProps[];
}

function UsersImage({ member }: UserImageProps) {
  let layer: 'layer';
  if (member.length > 1) {
    layer = 'layer';
  }

  const small = member.length - 2;
  const big = member.length - 4;

  return (
    <div className={S.container}>
      {member.slice(0, 2).map((user, index) => (
        <NameBadge
          key={index}
          letter={user.nickname.slice(0, 1)}
          layer={layer}
          index={index + 1}
          color={randomNickNameColor()}
        />
      ))}
      <MediaQuery minWidth={1200}>
        {(matches) =>
          matches &&
          member
            .slice(2, 4)
            .map((user, index) => (
              <NameBadge
                key={index}
                letter={user.nickname.slice(0, 1)}
                layer={layer}
                index={index + 3}
                color={randomNickNameColor()}
              />
            ))
        }
      </MediaQuery>
      {member[2] && (
        <MediaQuery maxWidth={1199}>
          {(matches) =>
            matches && (
              <NameBadge
                letter={`${'+'} ${small}`}
                layer={layer}
                index={3}
                color={randomNickNameColor()}
              />
            )
          }
        </MediaQuery>
      )}
      {member[4] && (
        <MediaQuery minWidth={1200}>
          {(matches) =>
            matches && (
              <NameBadge
                letter={`${'+'} ${big}`}
                layer={layer}
                index={5}
                color={randomNickNameColor()}
              />
            )
          }
        </MediaQuery>
      )}
    </div>
  );
}

export default UsersImage;
