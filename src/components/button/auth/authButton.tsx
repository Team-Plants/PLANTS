import S from '@/components/button/auth/auth.module.css';

interface Category {
  content: string;
  size: SizeType;
  active?: 'active' | 'inActive';
  type?: 'submit' | 'button';
}

function AuthButton({
  content,
  size,
  active = 'active',
  type = 'button',
}: Category) {
  return (
    <button type={type} className={`${S[size]} ${S[active]}`}>
      {content}
    </button>
  );
}

export default AuthButton;
