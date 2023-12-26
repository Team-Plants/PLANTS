import NameBadge from '@/components/nameBadge/nameBadge';

interface UserImageProps {
  users: {
    color: 'yellow' | 'orange' | 'green' | 'blue' | 'brown' | 'pink';
    letter: string;
  }[];
}

function UsersImage({ users }: UserImageProps) {
  return (
    <>
      {users.map((user) => {
        <NameBadge color={user.color} letter={user.letter} />;
      })}
    </>
  );
}

export default UsersImage;
