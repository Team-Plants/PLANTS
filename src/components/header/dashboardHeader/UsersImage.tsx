import NameBadge from '@/components/nameBadge/nameBadge';

function UsersImage({ users }) {
  console.log(users);
  return (
    <>
      {users.map((user) => {
        <NameBadge color={user.color} letter={user.letter} />;
      })}
    </>
  );
}

export default UsersImage;
