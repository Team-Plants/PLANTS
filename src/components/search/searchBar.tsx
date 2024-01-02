import S from '@/components/search/searchBar.module.css';
import Image from 'next/image';
import SearchImg from '@/assets/icons/Search.svg';
import { SetStateAction, Dispatch } from 'react';

interface SearchBarProps {
  setValue : Dispatch<SetStateAction<string | undefined>>
}

function SearchBar({ setValue }: SearchBarProps) {
  return (
    <div className={S.container}>
      <Image src={SearchImg} width={22} height={22} alt="돋보기 아이콘" />
      <input
        className={S.input}
        type="text"
        placeholder="검색"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
