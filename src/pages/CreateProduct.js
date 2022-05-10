import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { createProduct } from '../http/productApi';

export const CreateProduct = () => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [proteins, setProteins] = useState('');
  const [fats, setFats] = useState('');
  const [carbohydrates, setСarbohydrates] = useState('');
  const [mass, setMass] = useState('');

  const click = async () => {
    try {
      await createProduct(name, calories, proteins, fats, carbohydrates, mass);
      setName('');
      setCalories('');
      setProteins('');
      setFats('');
      setСarbohydrates('');
      setMass('');
    } catch (e) {
      alert(e.response.proteins.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
      <div style={{ width: 550 }}>
        <h2 className="m-auto" style={{ color: 'red' }}>
          Создать продукт
        </h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Название.."
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Form.Control
            className="mt-3"
            placeholder="Калории.."
            onChange={(e) => setCalories(e.target.value)}
            value={calories}
          />
          <Form.Control
            className="mt-3"
            placeholder="Протеин.."
            onChange={(e) => setProteins(e.target.value)}
            value={proteins}
          />
          <Form.Control className="mt-3" placeholder="Жиры.." onChange={(e) => setFats(e.target.value)} value={fats} />
          <Form.Control
            className="mt-3"
            placeholder="Углеводы.."
            onChange={(e) => setСarbohydrates(e.target.value)}
            value={carbohydrates}
          />
          <Form.Control className="mt-3" placeholder="Масса.." onChange={(e) => setMass(e.target.value)} value={mass} />
          <Button style={{ margin: '20px 0px 0px 0px', color: 'white', background: 'red' }} onClick={click}>
            Создать
          </Button>
        </Form>
      </div>
    </Container>
  );
};
