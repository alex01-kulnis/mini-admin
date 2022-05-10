import Auth from './pages/Auth';
import Products from './pages/Products';
import { CreateProduct } from './pages/CreateProduct';
import User from './pages/User';
import { LOGIN_ROUTE, ALL_USERS_ROUTE, CREATE_PRODUCT_ROUTE, ALL_PRODUCTS_ROUTE } from './utils/consts';

export const authRoutes = [
  { path: LOGIN_ROUTE, Component: Auth },
  { path: ALL_USERS_ROUTE, Component: User },
  { path: CREATE_PRODUCT_ROUTE, Component: CreateProduct },
  { path: ALL_PRODUCTS_ROUTE, Component: Products },
];

export const publicRoutes = [{ path: LOGIN_ROUTE, Component: Auth }];
