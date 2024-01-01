import S from '@/components/nameBadge/nameBadge.module.css';

export type Colors = 'yellow' | 'orange' | 'green' | 'blue' | 'brown' | 'pink';
interface NameBadgeProps {
  color: Colors;
  letter: string;
  layer?: 'layer';
  index?: number;
}

function NameBadge({ color, letter, layer, index }: NameBadgeProps) {
  // console.log(color)
  return (
    <div
      className={layer ? `${S[color]} ${S[layer]}` : S[color]}
      style={{ zIndex: index, left: index ? `${index * 25}px` : '' }}>
      {letter}
    </div>
  );
}

export default NameBadge;
