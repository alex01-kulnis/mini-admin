import React from 'react';

export const UserItem = ({ post }) => {
  return (
    <div className="post_main">
      <div className="post">
        <div className="post__content">
          <div>id : {post.id}</div>
          <div>Логин : {post.login}</div>
          <div>Пароль : {post.password}</div>
          <div>Роль : {post.role}</div>
        </div>
      </div>
    </div>
  );
};
