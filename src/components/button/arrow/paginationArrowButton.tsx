import ArrowLeftImg from '@/assets/icons/ArrowLeft.svg';
import ArrowRightImg from '@/assets/icons/ArrowRight.svg';
import InActiveArrowLeftImg from '@/assets/icons/InActiveArrowLeft.svg';
import InActiveArrowRightImg from '@/assets/icons/InActiveArrowRight.svg';
import S from '@/components/button/arrow/paginationArrowButton.module.css';
import Image from 'next/image';

interface PaginationArrowButtonProps {
  size: SizeType;
  totalPage: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

function PaginationArrowButton({
  size,
  totalPage,
  page,
  setPage,
}: PaginationArrowButtonProps) {
  function onLeftClick() {
    if (page > 1) setPage((prev) => prev - 1);
  }

  function onRightClick() {
    if (page < totalPage) setPage((prev) => prev + 1);
  }

  return (
    <div className={S[size]}>
      <button className={S.leftContainer} onClick={onLeftClick}>
        {page > 1 ? (
          <Image src={ArrowLeftImg} alt="왼쪽 화살표" />
        ) : (
          <Image src={InActiveArrowLeftImg} alt="왼쪽 화살표" />
        )}
      </button>
      <button className={S.rightContainer} onClick={onRightClick}>
        {page < totalPage ? (
          <Image src={ArrowRightImg} alt="오른쪽 화살표" />
        ) : (
          <Image src={InActiveArrowRightImg} alt="오른쪽 화살표" />
        )}
      </button>
    </div>
  );
}

export default PaginationArrowButton;
