import { connect } from 'react-redux'
import { add_todo } from '../../state/actions/actions'
import TodoForm from '../forms/TodoForm'

const mapDispatchToProps = (dispatch)=>{

    return {
        submit: (text) =>{
            dispatch(add_todo(text))
        }
    }
}

const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm)

export default TodoFormContainer;