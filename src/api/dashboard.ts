import { instance } from '@/libs/api';
import axios from 'axios';

export async function getDashboards() {
  const response = await instance.get('/dashboards');
  return response.data;
}

export async function postDashboards(title: string, color: string) {
  const data = {
    title: title,
    color: color,
  };

  const option = {
    endpoint: '/dashboards',
    method: 'POST',
    data: data,
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result.data;
}
