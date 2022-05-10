import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import { observer } from 'mobx-react-lite';
import { fetchUsers } from '../http/userAPI';
import UserList from '../components/UserList';

const User = observer(() => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: 20, color: 'red' }}>Список Users</h1>
      <UserList posts={posts} />
    </div>
  );
});

export default User;
