import S from '@/components/button/button.module.css';
import { EventHandler, MouseEvent } from 'react';

type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;

interface ButtonProps {
  content: string;
  status: 'primary' | 'secondary';
  invited?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({ content, status, invited, onClick }: ButtonProps) {
  return (
    <button
      className={
        invited
          ? `${S[status]} ${S.container} ${S.invited}`
          : `${S[status]} ${S.container}`
      }
      onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;
