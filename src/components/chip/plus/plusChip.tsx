import PlusImg from '@/assets/icons/Plus.svg';
import S from '@/components/chip/plus/plus.module.css';
import Image from 'next/image';

function PlusChip() {
  return (
    <div className={S.container}>
      <Image src={PlusImg} alt="플러스" />
    </div>
  );
}

export default PlusChip;
