import baseService from './base-service';

export const authService = {
  login
};

function login(user) {
  return baseService.post('auth', user);
}
