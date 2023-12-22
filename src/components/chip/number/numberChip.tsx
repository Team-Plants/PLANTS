import S from '@/components/chip/number/number.module.css';

interface Content {
  num: number;
}

function NumberChip({ num }: Content) {
  return <div className={S.wrapper}>{num}</div>;
}

export default NumberChip;
