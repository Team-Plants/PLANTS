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
