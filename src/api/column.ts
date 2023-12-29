import axios from 'axios';

export async function postColumnImage(body: FormData, columnId: string) {
  const option = {
    baseUrl: `/columns/${columnId}/card-image`,
    method: 'POST',
    data: body,
  };

  const result = await axios.post('api/withAuthHandler', option);
  return result.data;
}
