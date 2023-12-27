import S from '@/components/nameBadge/nameBadge.module.css';

interface NameBadgeProps {
  color: 'yellow' | 'orange' | 'green' | 'blue' | 'brown' | 'pink';
  letter: string;
  layer?: 'layer';
  index?: number;
}

function NameBadge({ color, letter, layer, index }: NameBadgeProps) {
  return (
    <div
      className={layer ? `${S[color]} ${S[layer]}` : S[color]}
      style={{ zIndex: index, left: index ? `${index * 25}px` : '' }}>
      {letter}
    </div>
  );
}

export default NameBadge;
