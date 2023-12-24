import S from '@/components/button/button.module.css';

interface ButtonProps {
  content: string;
  device: DeviceType | 'small';
  status: 'primary' | 'secondary';
}

function Button({ content, device, status }: ButtonProps) {
  return <button className={`${S[device]} ${S[status]}`}>{content}</button>;
}

export default Button;
