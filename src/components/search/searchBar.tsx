import S from '@/components/search/searchBar.module.css';
import Image from 'next/image';
import SearchImg from '@/assets/icons/Search.svg';

function SearchBar() {
  return (
    <div className={S.container}>
      <Image src={SearchImg} width={22} height={22} alt="돋보기 아이콘" />
      <input className={S.input} type="text" placeholder="검색" />
    </div>
  );
}

export default SearchBar;
