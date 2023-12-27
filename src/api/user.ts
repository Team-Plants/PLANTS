import { SignFormValuesType } from '@/types/SignFormValue';
import axios, { AxiosError } from 'axios';

export const handleLogin = async (data: SignFormValuesType) => {
  try {
    const result = await axios.post('/api/login', data);
    //TODO: user 관리
    if (result.status === 201) {
      return true;
    }
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      alert(e.response?.data.message || e.message);
    }
    return false;
  }
};
