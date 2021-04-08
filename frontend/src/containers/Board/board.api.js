import request from 'utils/request';

export function getPostsAPI() {
  return request.get('api/v1/posts?limit=100');
}

export function postPostsAPI(payload) {
  const formData = new FormData();
  formData.set('title', payload.title);
  formData.set('text', payload.text);
  payload.photo && formData.set('photo', payload.photo);

  return request.post('api/v1/posts', formData);
}
