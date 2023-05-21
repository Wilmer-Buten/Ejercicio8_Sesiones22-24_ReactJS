import { configureStore  } from "@reduxjs/toolkit";
import todosReducer from "../reducers/todosReducer";
import filterReducer from '../reducers/filterReducer'

export const store = configureStore({
        reducer: {
            todoState: todosReducer,
            filterState: filterReducer, 
        }
    });
