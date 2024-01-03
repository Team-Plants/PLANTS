import S from '@/components/chip/category/category.module.css';

interface Category {
  content: string;
  color: ThemeType;
}

function CategoryChip({ content, color }: Category) {
  const colorName = color.split('#')[0];
  return <div className={S[colorName]}>{content}</div>;
}

export default CategoryChip;
