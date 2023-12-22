import CircleImg from '@/assets/icons/Circle.svg';
import S from '@/components/chip/progress/progress.module.css';
import Image from 'next/image';

type StatusType = 'ToDo' | 'On Progress' | 'Done';

interface Status {
  progress: StatusType;
}

function ProgressChip({ progress }: Status) {
  return (
    <div className={S.wrapper}>
      <Image src={CircleImg} alt="동그라미" />
      <span className={S.text}>{progress}</span>
    </div>
  );
}

export default ProgressChip;
