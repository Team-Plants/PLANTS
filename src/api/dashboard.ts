import { instance } from '@/libs/api';

export async function getDashboards() {
  const response = await instance.get('/dashboards');
  return response.data;
}

export async function postDashboards(title: string, color: string) {
  const data = {
    title: title,
    color: color,
  };

  const headers = {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUyLCJ0ZWFtSWQiOiIxLTUiLCJpYXQiOjE3MDM2NjA1MTcsImlzcyI6InNwLXRhc2tpZnkifQ.R6um2x6h1rguhyKds0EEF8L7BtfSMrRGIpKNL9z-rg4',
  };

  const response = await instance.post('/dashboards', data, { headers });
  return response.data;
}
