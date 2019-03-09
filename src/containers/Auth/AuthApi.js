import url from '../../common/url';
import md5 from 'md5';

function* apiLogin(username, password) {
  const response = yield fetch(`${url.LOGIN}?user=${username}&pass=${md5(password)}`, {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      }
  });
  const login = yield response.status === 200 ? JSON.parse(response._bodyInit): [];
  return login;
}
export const Api = {
  apiLogin
}; 