import CircleImg from '@/assets/icons/Circle.svg';
import s from '@/components/chip/progress/progress.module.css';
import Image from 'next/image';

type StatusType = 'ToDo' | 'On Progress' | 'Done';

interface Status {
  progress: StatusType;
}

function ProgressChip({ progress }: Status) {
  return (
    <div className={s.wrapper}>
      <Image src={CircleImg} alt="동그라미" />
      <span className={s.text}>{progress}</span>
    </div>
  );
}

export default ProgressChip;
