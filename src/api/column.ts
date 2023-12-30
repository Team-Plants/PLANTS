import { instanceFiles } from '@/libs/api';
import axios from 'axios';

export async function postColumnImage(body: FormData, columnId: string) {
  const tokenResponse = await axios.post('/api/getToken');
  const token = tokenResponse.data;

  if (token) {
    const response = await instanceFiles({
      method: 'POST',
      url: `/columns/${columnId}/card-image`,
      data: body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
  return;
}
