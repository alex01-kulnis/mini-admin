import React, { useState } from 'react';
import { updateProduct, deleteProduct } from '../http/productApi';

export const ProductsItem = ({ post }) => {
  const [state, setState] = useState({ ...post });

  const onChangeHandler = (event) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const update = async () => {
    try {
      await updateProduct(state);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const remove = async () => {
    try {
      await deleteProduct(post.id);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className="post_main">
      <div className="post2">
        <div className="post__content">
          <h6 style={{ color: 'red', margin: '5px 0px 5px 0px' }}>Название</h6>
          <input placeholder="Название.." onChange={(e) => onChangeHandler(e)} value={state.name} name="name" />
          <h6 style={{ color: 'red', margin: '5px 0px 5px 0px' }}>Калории</h6>
          <input placeholder="Калории.." onChange={(e) => onChangeHandler(e)} value={state.calories} name="calories" />
          <h6 style={{ color: 'red', margin: '5px 0px 5px 0px' }}>Протеин</h6>
          <input placeholder="Протеин.." onChange={(e) => onChangeHandler(e)} value={state.proteins} name="proteins" />
          <h6 style={{ color: 'red', margin: '5px 0px 5px 0px' }}>Жиры</h6>
          <input placeholder="Жиры.." onChange={(e) => onChangeHandler(e)} value={state.fats} name="fats" />
          <h6 style={{ color: 'red', margin: '5px 0px 5px 0px' }}>Углеводы</h6>
          <input
            placeholder="Углеводы.."
            onChange={(e) => onChangeHandler(e)}
            value={state.carbohydrates}
            name="carbohydrates"
          />
          <h6 style={{ color: 'red', margin: '5px 0px 5px 0px' }}>Масса</h6>
          <input placeholder="Масса.." onChange={(e) => onChangeHandler(e)} value={state.mass} name="mass" />
        </div>
        <div className="post__btns">
          <button style={{ margin: ' 0px 0px 20px 0px ' }} onClick={update}>
            Обновить
          </button>
          <button onClick={remove}>Удалить</button>
        </div>
      </div>
    </div>
  );
};
