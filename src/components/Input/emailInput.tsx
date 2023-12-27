import Input from '@/components/Input/Input';

interface Props {
  size?: 'shortContainer';
}

function EmailInput({ size }: Props) {
  return <Input type="email" label="이메일" size={size} />;
}

export default EmailInput;
