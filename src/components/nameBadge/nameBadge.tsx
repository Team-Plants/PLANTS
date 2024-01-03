import S from '@/components/nameBadge/nameBadge.module.css';
import { Colors } from '@/components/header/dashboardHeader/dashboardHeader';

interface NameBadgeProps {
  letter: string;
  layer?: 'layer';
  index?: number;
  color: Colors;
}

function NameBadge({ letter, layer, index, color }: NameBadgeProps) {
  return (
    <div
      className={layer ? `${S[color]} ${S[layer]}` : S[color]}
      style={{ zIndex: index, left: index ? `${index * 25}px` : '' }}>
      {letter}
    </div>
  );
}

export default NameBadge;
