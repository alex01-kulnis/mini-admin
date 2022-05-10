import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { UserItem } from './UserItem';
import { observer } from 'mobx-react-lite';

const UserList = observer(({ posts }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center', color: 'red' }}>Пользователей не найдено!</h1>;
  }

  return (
    <div>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <UserItem post={post} key={post.id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
});

export default UserList;
