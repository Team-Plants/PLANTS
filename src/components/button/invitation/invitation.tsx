import S from '@/components/button/invitation/invitation.module.css';
import { EventHandler, MouseEvent } from 'react';
import AddButtonImg from '@/assets/icons/AddBox.svg';
import Image from 'next/image';

type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function InvitationButton({ onClick }: ButtonProps) {
  return (
    <button className={S.container} onClick={onClick}>
      <Image src={AddButtonImg} width={16} height={16} alt="플러스 모양" />
      초대하기
    </button>
  );
}

export default InvitationButton;
