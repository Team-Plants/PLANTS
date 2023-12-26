import { SignFormValuesType } from '@/types/SignFormValue';
import axios from 'axios';

export const handleLogin = async (data: SignFormValuesType) => {
  try {
    const result = await axios.post('/api/login', data);
    if (result.status === 200) {
      const { user } = result.data;
      localStorage.setItem('user', JSON.stringify(user));
      return;
    }
    throw new Error();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    if (e.response.data) {
      alert(e.response.data.message);
      return;
    }
    alert('문제가 발생했습니다. 다시 시도해주세요.');
  }
};
