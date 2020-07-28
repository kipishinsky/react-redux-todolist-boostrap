import React from 'react';

import TodoListItem from '../todo-list-item/TodolistItem';
import './Todolist.css';

const Todolist = ({ todos }) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps } />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default Todolist;
