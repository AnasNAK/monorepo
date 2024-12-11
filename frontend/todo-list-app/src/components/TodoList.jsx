import React from 'react';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li key={todo.id} className={`flex items-center p-3 bg-white rounded-lg shadow transition-all duration-300 hover:shadow-md ${todo.completed ? 'opacity-60' : ''}`}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="mr-3 form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
          />
          <span className={`flex-grow ${todo.completed ? 'line-through' : ''}`}>{todo.title}</span>
          <button 
            onClick={() => deleteTodo(todo.id)}
            className="ml-2 px-2 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors duration-300"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

