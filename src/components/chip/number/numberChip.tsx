import s from '@/components/chip/number/number.module.css';

interface Number {
  num: number;
}

function NumberChip({ num }: Number) {
  return <div className={s.wrapper}>{num}</div>;
}

export default NumberChip;
