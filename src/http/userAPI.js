import { $host, $authHost } from './index';

export const registration = async (login, password) => {
  const { data } = await $host.post('/api/user/register', { login, password });
  localStorage.setItem('token', data.token);
  return data.token;
};

export const login = async (login, password) => {
  const { data } = await $host.post('/api/user/auth', { login, password });
  localStorage.setItem('token', data);
  return data;
};

export const fetchUsers = async () => {
  const { data } = await $authHost.get('/api/user');
  return data;
};
