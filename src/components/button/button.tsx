import S from '@/components/button/button.module.css';
import { EventHandler, MouseEvent } from 'react';

type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;

interface ButtonProps {
  content: string;
  status: 'primary' | 'secondary';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({ content, status, onClick }: ButtonProps) {
  return (
    <button className={`${S[status]}`} onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;
