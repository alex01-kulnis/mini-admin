import { $authHost } from './index';

export const createProduct = async (name, calories, proteins, fats, carbohydrates, mass) => {
  const { data } = await $authHost.post('/api/product', {
    name,
    calories,
    proteins,
    fats,
    carbohydrates,
    mass,
  });
  return data;
};

export const fetchProducts = async () => {
  const { data } = await $authHost.get('/api/product');
  return data;
};

export const updateProduct = async ({ id, name, calories, proteins, fats, carbohydrates, mass }) => {
  const url = '/api/product/' + id;
  const { data } = await $authHost.put(url, {
    name,
    calories,
    proteins,
    fats,
    carbohydrates,
    mass,
  });
  return data;
};

export const deleteProduct = async (id) => {
  const url = '/api/product/' + id;
  const { data } = await $authHost.delete(url, {
    id,
  });
  return data;
};
