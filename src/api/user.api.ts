import api from './api';

async function createAccount(values: any) {
  return await api.post('/users/register', values);
}

async function getLoggedInUserData() {
  return await api.get('/users/me');
}

export { createAccount, getLoggedInUserData };
