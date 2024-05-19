import api from './api';

async function createAccount(values: any) {
  return await api.post('/users/register', values);
}

export { createAccount };
