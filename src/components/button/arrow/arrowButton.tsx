import ArrowLeftImg from '@/assets/icons/ArrowLeft.svg';
import ArrowRightImg from '@/assets/icons/ArrowRight.svg';
import S from '@/components/button/arrow/arrow.module.css';
import Image from 'next/image';

interface Category {
  size: SizeType;
}

function ArrowButton({ size }: Category) {
  return (
    <div className={S[size]}>
      <button className={S.leftWrapper}>
        <Image src={ArrowLeftImg} alt="왼쪽 화살표" />
      </button>
      <button className={S.rightWrapper}>
        <Image src={ArrowRightImg} alt="오른쪽 화살표" />
      </button>
    </div>
  );
}

export default ArrowButton;
