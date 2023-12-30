import { instanceFiles } from '@/libs/api';
import { ColumnType } from '@/types/Column';
import axios, { AxiosError } from 'axios';

export async function postColumnImage(body: FormData, columnId: string) {
  const response = await instanceFiles.post(
    `/columns/${columnId}/card-image`,
    body,
  );

  return response.data;
}

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

export async function getColumns(dashboardId: number) {
  const option = {
    endpoint: `/columns?dashboardId=${dashboardId}`,
    method: 'GET',
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result.data.data;
}
