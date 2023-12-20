import PlusImg from '@/assets/icons/Plus.svg';
import s from '@/components/chip/plus/plus.module.css';
import Image from 'next/image';

function PlusChip() {
  return (
    <div className={s.wrapper}>
      <Image src={PlusImg} alt="플러스" />
    </div>
  );
}

export default PlusChip;
