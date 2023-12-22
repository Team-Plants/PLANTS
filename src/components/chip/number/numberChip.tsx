import S from '@/components/chip/number/number.module.css';

interface Number {
  num: number;
}

function NumberChip({ num }: Number) {
  return <div className={S.wrapper}>{num}</div>;
}

export default NumberChip;
