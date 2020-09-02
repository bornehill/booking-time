import config from 'config';
import { authHeader } from '../helpers/auth-header';

class BaseService {
  static get(
    endpoint = '',
    queryParams
  ) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    if(queryParams)
    {
      requestOptions.body = new URLSearchParams(queryParams);
    }

    return fetch(`${config.apiUrl}${endpoint ? `/${endpoint}` : ''}`, requestOptions).then(handleResponse);
  }

  static logout() {
    localStorage.removeItem('user');
  }
}

function handleResponse(response) {
  return response.json().then(data => {
      if (!response.ok) {
          if (response.status === 401) {
              BaseService.logout();
              location.reload(true);
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }

      return data;
  });
}

export default BaseService;
