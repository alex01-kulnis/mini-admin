import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ProductsItem } from './ProductsItem';
import { observer } from 'mobx-react-lite';

const ProductsList = observer(({ posts }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center', color: 'red' }}>Продукты не найдены!</h1>;
  }

  return (
    <div>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <ProductsItem post={post} key={post.id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
});

export default ProductsList;
