import React from 'react';
import TodoList from './components/TodoList'
import { useState } from 'react';
import TodoForm from './components/TodoForm'

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        },
    ];

    const [todoList, setTodoList] = useState(initTodoList)
    const [filterStatus, setFilterStatus] = useState('all')
    console.log(todoList);
    const handleTodoClick = (todo, index) => {
        // clone curren array to the new one
        const newTodoList = [...todoList]


        // toggle state 
        const newTodo = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        }
        newTodoList[index] = newTodo
        // update todolist
        setTodoList(newTodoList)
    }

    const handleShowAllClick = () => {
        setFilterStatus('all')

    }
    const handleShowCompletedClick = () => {
        setFilterStatus('completed')

    }

    const handleShowNewClick = () => {
        setFilterStatus('new')

    }

    //
    const renderedTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status)

    const handleTodoFormSubmit = (value) =>
        setTodoList([...todoList, {
            id: todoList.length + 1,
            title: value.title,
            status: 'new'

        }])


    return (
        <div>
            <h3>Todo Form</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <h3>ToDo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;