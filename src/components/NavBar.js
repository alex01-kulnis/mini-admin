import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Context } from '../index';
import { ALL_PRODUCTS_ROUTE, CREATE_PRODUCT_ROUTE, ALL_USERS_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const NavBar = observer(() => {
  const { user } = useContext(Context);

  function logout() {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem('token');
  }

  return (
    <Navbar bg="light" style={{ height: 50 }}>
      <Container>
        <Nav className="ml-auto">
          <Link
            className="text-decoration-none text-reset"
            style={{ color: 'red', margin: ' 0px 24px 0px 0px ' }}
            to={ALL_USERS_ROUTE}
          >
            Пользователи
          </Link>
          <Link
            className="text-decoration-none text-reset"
            style={{ color: 'red', margin: ' 0px 24px 0px 0px ' }}
            to={ALL_PRODUCTS_ROUTE}
          >
            Продукты
          </Link>
          <Link
            className="text-decoration-none text-reset"
            style={{ color: 'red', margin: ' 0px 24px 0px 0px ' }}
            to={CREATE_PRODUCT_ROUTE}
          >
            Создать продукт
          </Link>
          <Link
            className="text-decoration-none text-reset"
            style={{ color: 'red', margin: ' 0px 0px 0px 595px ' }}
            to={LOGIN_ROUTE}
            onClick={() => logout()}
          >
            Выйти
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
});

export default NavBar;
