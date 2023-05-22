import { applyMiddleware, configureStore  } from "@reduxjs/toolkit";
import todosReducer from "../reducers/todosReducer";
import filterReducer from '../reducers/filterReducer'
import { userReducer } from "../reducers/userReducer";
import createSagaMiddleware from 'redux-saga';
import { watcherSaga, workerSaga } from "../sagas/sagas";

export const store = configureStore({
        reducer: {
            todoState: todosReducer,
            filterState: filterReducer, 
            userState: userReducer
        }   
    });

const sagaMiddleware = createSagaMiddleware();

export const asyncStore = configureStore({

    reducer: {
        todoState: todosReducer,
        filterState: filterReducer, 
        userState: userReducer
    },

    middleware: [sagaMiddleware]

})

sagaMiddleware.run(watcherSaga)
