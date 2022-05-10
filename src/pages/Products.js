import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import { observer } from 'mobx-react-lite';
import { fetchProducts } from '../http/productApi';
import ProductsList from '../components/ProductsList';

const Products = observer(() => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => setPosts(data));
  }, [posts]);

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: 20, color: 'red' }}>Список продуктов</h1>
      <ProductsList posts={posts} />
    </div>
  );
});

export default Products;
