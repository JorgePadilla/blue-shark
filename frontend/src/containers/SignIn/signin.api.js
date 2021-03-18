import request from 'utils/request';

export function postSignInAPI(payload) {
  return request.post('/api/v1/signin', payload);
}
