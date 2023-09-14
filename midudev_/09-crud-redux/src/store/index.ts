import { configureStore } from '@reduxjs/toolkit';;;;
import usersReducer from './users/slice'


const persistanceLocalStorageMiddleware = (store:any) => (next:any) => (action:any) => {
    // console.log(store.getState());
    // console.log(action);
    next(action)
    // console.log(store.getState());
    localStorage.setItem("__REDUX__STATE___", JSON.stringify(store.getState()))
    
    
}

export const store = configureStore({

    reducer: {
        users: usersReducer,
    },
    middleware: [persistanceLocalStorageMiddleware],
});

// esto es para tipar la función en redux
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;