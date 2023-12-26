import Image from 'next/image';
import ArrowLeftImage from '@/assets/icons/ArrowLeft.svg';
import S from '@/components/button/dashBoard/return/returnButton.module.css';
import { MouseEvent } from 'react';
import { useRouter } from 'next/router';

interface returnButtonProps {
  url: string;
}

function ReturnButton({ url }: returnButtonProps) {
  const router = useRouter();

  function handleReturnClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    router.push(`/${url}`);
  }

  return (
    <button className={S.returnButton} onClick={handleReturnClick}>
      <Image
        src={ArrowLeftImage}
        alt="돌아가기 버튼 이미지"
        width={18}
        height={18}
      />
      돌아가기
    </button>
  );
}

export default ReturnButton;
