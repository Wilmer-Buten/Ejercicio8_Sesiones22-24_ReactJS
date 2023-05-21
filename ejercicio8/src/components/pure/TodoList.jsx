import React from 'react'
import Todo from './Todo';
import PropTypes from 'prop-types'; 


function TodoList({todos, onTodoClick}) {
 
 
    return (
    <div>
        <ul>
            {todos.map((todo, index)=>{
               return <Todo key={index} {...todo} onTodoClick={()=>{onTodoClick(index)}}></Todo>
            })}
        </ul>
    </div>
  )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape(
            {
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }
        ).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList;


