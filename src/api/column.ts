import { instanceFiles } from '@/libs/api';
import axios, { AxiosError } from 'axios';

export async function postColumnImage(body: FormData, columnId: string) {
  const response = await instanceFiles.post(
    `/columns/${columnId}/card-image`,
    body,
  );

  return response.data;
}

// TODO: body 타입 명시하기
export async function postColumnAdd(body: Object) {
  try {
    const option = {
      endpoint: '/columns',
      method: 'POST',
      data: body,
    };

    const result = await axios.post('/api/withAuthHandler', option);
    if (result.status === 201) {
      return true;
    }
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      alert(e.response?.data.message || e.message);
    }
    return false;
  }
}
