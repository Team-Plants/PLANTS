import S from '@/components/button/auth/auth.module.css';

interface Category {
  content: string;
  size: SizeType;
  active?: 'active' | 'inActive';
}

function AuthButton({ content, size, active = 'active' }: Category) {
  return <button className={`${S[size]} ${S[active]}`}>{content}</button>;
}

export default AuthButton;
