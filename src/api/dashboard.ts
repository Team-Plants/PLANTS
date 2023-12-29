import axios from 'axios';

type Method = 'pagination' | 'infiniteScroll';

export async function getDashboards(navigationMethod: Method) {
  const option = {
    endpoint: '/dashboards',
    method: 'GET',
    params: {
      navigationMethod: `${navigationMethod}`,
      size: 5,
    },
  };

  const result = await axios.post('api/withAuthHandler', option);
  return result.data;
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
