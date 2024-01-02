import S from '@/components/search/searchBar.module.css';
import Image from 'next/image';
import SearchImg from '@/assets/icons/Search.svg';
import { SetStateAction, Dispatch, ChangeEvent } from 'react';

interface SearchBarProps {
  setValue : Dispatch<SetStateAction<string | undefined>>
}

function SearchBar({ setValue }: SearchBarProps) {

  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setTimeout(() => {
      setValue(value)
    },1000)
  }

  return (
    <div className={S.container}>
      <Image src={SearchImg} width={22} height={22} alt="돋보기 아이콘" />
      <input
        className={S.input}
        type="text"
        placeholder="검색"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default SearchBar;
