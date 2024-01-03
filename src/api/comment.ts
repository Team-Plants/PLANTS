import axios from 'axios';

export async function getComments(
  cardId: number,
  size?: number,
  cursorId?: number | undefined,
) {
  const option = {
    endpoint: `/comments?cardId=${cardId}`,
    method: 'GET',
    params: {
      navigationMethod: 'infiniteScroll',
      size: size,
      cursorId: cursorId,
    },
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result.data;
}

export async function postComments(
  content: string,
  cardId: number,
  columnId: number,
  dashboardId: number,
) {
  const data = {
    content,
    cardId,
    columnId,
    dashboardId,
  };

  const option = {
    endpoint: `/comments`,
    method: 'POST',
    data: data,
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result.data;
}

export async function putComment(commentId: number, content: string) {
  const data = {
    content,
  };

  const option = {
    endpoint: `/comments/${commentId}`,
    method: 'PUT',
    data: data,
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result.data;
}

export async function deleteComment(commentId: number) {
  const option = {
    endpoint: `/comments/${commentId}`,
    method: 'DELETE',
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result;
}
