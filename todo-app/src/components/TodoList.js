import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

// const TodoList = () => {
//   return (
//     <div className="TodoList">
//       <TodoListItem />
//       <TodoListItem />
//       <TodoListItem />
//       <TodoListItem />
//     </div>
//   );
// };

// export default TodoList;

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
