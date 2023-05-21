import { ADD_TODO, TOGGLE_TODO } from '../actions/actions';

let initialState = []


function todosReducer(state=initialState, action) {
  switch (action.type) {
    case ADD_TODO:
        return [
            ...state,
            {
            id: state.length,
            text: action.payload.text,
            completed: false
            }
        ]
    case TOGGLE_TODO: 
        return state.map((todo)=>(
            todo.id === action.payload.id
            ? {
                ...todo, 
                completed: !todo.completed}
            : todo
        ))
  
    default:
        return state;
  }
}

export default todosReducer;