import InActiveArrowLeftImg from '@/assets/icons/InActiveArrowLeft.svg';
import InActiveArrowRightImg from '@/assets/icons/InActiveArrowRight.svg';
import S from '@/components/button/arrow/arrow.module.css';
import Image from 'next/image';

interface Category {
  size: SizeType;
}

function InActiveArrowButton({ size }: Category) {
  return (
    <div className={S[size]}>
      <button className={S.leftWrapper}>
        <Image src={InActiveArrowLeftImg} alt="왼쪽 화살표" />
      </button>
      <button className={S.rightWrapper}>
        <Image src={InActiveArrowRightImg} alt="오른쪽 화살표" />
      </button>
    </div>
  );
}

export default InActiveArrowButton;
