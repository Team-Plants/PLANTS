import { instance } from '@/libs/api';
import axios from 'axios';

export async function getMembers(dashboardId: number) {
  const option = {
    endpoint: `/members?dashboardId=${dashboardId}`,
    method: 'GET',
  };

  const result = await axios.post('api/withAuthHandler', option);
  return result.data;
}

export async function deleteMember(memberId: string) {
  const response = await instance.delete(`/members/${memberId}`);
  return response.data;
}
