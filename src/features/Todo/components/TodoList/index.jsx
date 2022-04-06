import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import classnames from 'classnames'
TodoList.propTypes = {
    initTodoList: PropTypes.array,
    onTodoClick: PropTypes.func
}
TodoList.defaultProps = {
    initTodoList: [],
    onTodoClick: null
}

function TodoList({ todoList, onTodoClick }) {
    const handleTodoClick = (todo, index) => {
        if (!onTodoClick) return;
        onTodoClick(todo, index)
    }
    return (
        <ul className="todo-list">
            {todoList.map((todo, index) => (
                <li key={todo.id} className={classnames({
                    'todo-item': true,
                    completed: todo.status === 'completed'
                })}
                    onClick={() => handleTodoClick(todo, index)}
                >{todo.title}</li>
            ))
            }

        </ul >
    );
}

export default TodoList;