import { instance } from '@/libs/api';

export async function getMembers() {
  const response = await instance.get('/members');
  return response.data;
}

export async function deleteMember(memberId: string) {
  const response = await instance.delete(`/members/${memberId}`);
  return response.data;
}
