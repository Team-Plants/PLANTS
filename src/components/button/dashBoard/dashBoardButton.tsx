import ArrowForwardImg from '@/assets/icons/ArrowForward.svg';
import Crown from '@/assets/icons/Crown.svg';
import S from '@/components/button/dashBoard/dashBoard.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface Category {
  content: string;
  color: string;
  dashboardId: number;
  madeByOwner?: boolean;
}

function DashBoardButton({
  content,
  color,
  dashboardId,
  madeByOwner = false,
}: Category) {
  const router = useRouter();

  return (
    <button
      className={S.container}
      onClick={() => router.push(`/dashboard/${dashboardId}`)}>
      <div className={S.contentContainer}>
        <div className={S.circle} style={{ backgroundColor: color }} />
        <div className={S.content}>{content}</div>
        {madeByOwner && <Image src={Crown} alt="왕관" />}
      </div>
      <Image src={ArrowForwardImg} alt="오른쪽 화살표" />
    </button>
  );
}

export default DashBoardButton;
