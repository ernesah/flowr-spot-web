import api from './api';

interface RegistrationData {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  email: string;
  password: string;
}

async function createAccount(values: RegistrationData) {
  return await api.post('/users/register', values);
}

async function getLoggedInUserData() {
  return await api.get('/users/me');
}

export { createAccount, getLoggedInUserData };
