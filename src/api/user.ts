import { SignFormValuesType } from '@/types/SignFormValue';
import axios, { AxiosError } from 'axios';

export const handleLogin = async (data: SignFormValuesType) => {
  try {
    await axios.post('/api/login', data);
    //TODO: user 관리
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      alert(e.response?.data.message || e.message);
    }
  }
};
