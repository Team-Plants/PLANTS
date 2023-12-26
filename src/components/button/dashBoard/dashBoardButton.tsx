import ArrowForwardImg from '@/assets/icons/ArrowForward.svg';
import Crown from '@/assets/icons/Crown.svg';
import S from '@/components/button/dashBoard/dashBoard.module.css';
import Image from 'next/image';

interface Category {
  content: string;
  color: string;
  device: DeviceType;
  madeByOwner?: boolean;
}

//TODO: 대시보드 생성 시 선택한 color로 Circle img 색상 변경
function DashBoardButton({
  content,
  color,
  device,
  madeByOwner = false,
}: Category) {
  return (
    <button className={S[device]}>
      <div className={S.contentContainer}>
        <div className={S.circle} style={{ backgroundColor: color }} />
        {content}
        {madeByOwner && <Image src={Crown} alt="왕관" />}
      </div>
      <Image src={ArrowForwardImg} alt="오른쪽 화살표" />
    </button>
  );
}

export default DashBoardButton;
