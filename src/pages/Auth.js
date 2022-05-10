import React, { useContext, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { ALL_USERS_ROUTE } from '../utils/consts';
import { login } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Auth = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();
  const [loginn, setLogin] = useState('admin');
  const [password, setPassword] = useState('1234');

  const click = async () => {
    try {
      await login(loginn, password);
      user.setUser(user);
      user.setIsAuth(true);
      history.push(ALL_USERS_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto" style={{ color: 'red' }}>
          Вход в систему
        </h2>
        <Form className="d-flex flex-column">
          <>
            <Form.Control
              onChange={(e) => setLogin(e.target.value)}
              value={loginn}
              className="mt-3"
              placeholder="Введите ваш логин..."
            />
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="mt-3"
              placeholder="Введите ваш пароль..."
              type="password"
            />
          </>
          <Button onClick={click} style={{ margin: '10px 0px 0px 0px', color: 'white', background: 'red' }}>
            Войти
          </Button>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
