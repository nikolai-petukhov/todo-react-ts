import React from 'react';
import { Todo } from '../todo.model';

import './TodoLsit.css'

interface TodoListProps {
    items: Todo[];
    onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
    
    return (
        <ul>
            {items.map(todo => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={onDeleteTodo.bind(null, todo.id)}>DELETE</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;