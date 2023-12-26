import S from '@/components/nameBadge/nameBadge.module.css';

interface NameBadgeProps {
  color: 'yellow' | 'orange' | 'green' | 'blue' | 'brown' | 'pink';
  letter: string;
}

function NameBadge({ color, letter }: NameBadgeProps) {
  return <div className={S[color]}>{letter}</div>;
}

export default NameBadge;
