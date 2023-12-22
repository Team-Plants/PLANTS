import S from '@/components/chip/category/category.module.css';

interface Category {
  content: string;
  color: Theme;
}

function CategoryChip({ content, color }: Category) {
  return <div className={S[color]}>{content}</div>;
}

export default CategoryChip;
