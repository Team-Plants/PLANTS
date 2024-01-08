import CircleImg from '@/assets/icons/Circle.svg';
import S from '@/components/chip/progress/progress.module.css';
import Image from 'next/image';

type StatusType = string;

interface Status {
  progress: StatusType;
}

function ProgressChip({ progress }: Status) {
  return (
    <div className={S.container}>
      <Image src={CircleImg} alt="동그라미" />
      <span className={S.text}>{progress}</span>
    </div>
  );
}

export default ProgressChip;
