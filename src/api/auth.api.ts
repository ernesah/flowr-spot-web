import api from './api';

async function login(values: { email: string; password: string }) {
  return await api.post('/users/login', values);
}

export { login };
