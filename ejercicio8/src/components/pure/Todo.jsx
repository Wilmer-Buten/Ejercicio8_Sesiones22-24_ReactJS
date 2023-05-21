import React from 'react'
import PropTypes from 'prop-types'; 

function Todo({onTodoClick, id, text, completed}) {
  
  
    return (
    <li style={{
        textDecoration: completed ? 'line-through' : 'none',
        color: completed ? 'gray' : 'green'
    }}
    onClick={()=>{onTodoClick(id)}}>
        {id} - {text} 
    </li>
  )
}

Todo.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}

export default Todo;