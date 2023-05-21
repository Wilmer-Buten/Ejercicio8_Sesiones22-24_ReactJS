import { connect, useDispatch } from 'react-redux'
import { toggle_todo } from '../../state/actions/actions'
import TodoList from '../pure/TodoList'

const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter((todos) => todos.completed);
        case 'SHOW_UNCOMPLETED':
            return todos.filter((todos) => !todos.completed);
        default:
            return todos;
    }
}  

const mapStateToProps = (state) => {
    return {todos: filterTodos(state.todoState, state.filterState)
}}

const mapDispatchToProps = (dispatch) => {

    return {
        onTodoClick: (id) => {
            dispatch(toggle_todo(id))
        }
    }

}
 const TodosContainer =connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodosContainer;