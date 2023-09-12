import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/slice'


export const store = configureStore({

    reducer: {
        users: usersReducer,
    },
});

// esto es para tipar la función en redux
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch