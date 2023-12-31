import S from '@/components/search/searchBar.module.css';
import Image from 'next/image';
import SearchImg from '@/assets/icons/Search.svg';
import { InvitedDashBoardProps } from '@/types/InvitedDashBoard';
import { useState, useEffect, SetStateAction, Dispatch } from 'react';

interface SearchBarProps {
  invitations: InvitedDashBoardProps[];
  setInvitation: Dispatch<SetStateAction<InvitedDashBoardProps[]>>;
}

function SearchBar({ invitations, setInvitation }: SearchBarProps) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const filter = invitations.filter((invitee) =>
      invitee.dashboard.title.includes(value),
    );
    setInvitation(filter);
  }, [value]);

  return (
    <div className={S.container}>
      <Image src={SearchImg} width={22} height={22} alt="돋보기 아이콘" />
      <input
        className={S.input}
        type="text"
        value={value}
        placeholder="검색"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
