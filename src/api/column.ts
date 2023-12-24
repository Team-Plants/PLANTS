import { instanceFiles } from '@/libs/api';

export async function postColumnImage(body: FormData, columnId: string) {
  const response = await instanceFiles.post(
    `/columns/${columnId}/card-image`,
    body,
  );

  return response.data;
}
