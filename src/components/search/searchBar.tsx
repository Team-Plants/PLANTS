import S from '@/components/search/searchBar.module.css';
import Image from 'next/image';
import SearchImg from '@/assets/icons/Search.svg';
import { SetStateAction, Dispatch, useState, ChangeEvent } from 'react';

interface SearchBarProps {
  setValue: Dispatch<SetStateAction<string | undefined>>;
}

function SearchBar({ setValue }: SearchBarProps) {
  const [inputValue, setInputValue] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    setValue(e.target.value);
  }

  return (
    <div className={S.container}>
      <Image src={SearchImg} width={22} height={22} alt="돋보기 아이콘" />
      <input
        className={S.input}
        type="text"
        placeholder="검색"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
