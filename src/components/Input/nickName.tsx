import Input from '@/components/Input/Input';
import { MemberProps } from '@/types/Member';

interface Props {
  size?: 'shortContainer' | 'middleContainer';
  data?: MemberProps;
}

function NicknameInput({ size, data }: Props) {
  return <Input type="nickname" label="닉네임" size={size} data={data} />;
}

export default NicknameInput;
