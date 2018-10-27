import url from '../../common/url';

function* apiLogin(username, password) {
  const response = yield fetch(`${url.LOGIN}?username=${username}&&password=${password}`, {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      }
  });
  const login = yield response.status === 200 ? JSON.parse(response._bodyInit): []       
  return login;
}
export const Api = {
  apiLogin
}; 