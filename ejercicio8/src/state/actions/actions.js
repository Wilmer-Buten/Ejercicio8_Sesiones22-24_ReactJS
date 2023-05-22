
export const ADD_TODO = 'ADD_TODO'; 
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'; 

export const add_todo = (text,id) => {

	return {
	   type: ADD_TODO,
	   payload: {
        	id: id, 
	    	text: text
           }
    }
}


export const toggle_todo = (id) => {

	return {
   	  type: TOGGLE_TODO,
	  payload: {
	     id 	
	  }
	
	}	

}

export const setVisibilityFilter = (filter) => {

	return {
	 type: SET_VISIBILITY_FILTER,
	 payload: {
	 filter
	 }

	}
	
}

