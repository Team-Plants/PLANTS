import Input from '@/components/Input/Input';

interface Props {
  size?: 'shortContainer';
}

function NicknameInput({ size }: Props) {
  return <Input type="nickname" label="닉네임" size={size} />;
}

export default NicknameInput;
