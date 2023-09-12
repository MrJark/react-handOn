import {createSlice} from '@reduxjs/toolkit';

export interface User {
    name: string,
    email: string,
    github: string
}

export interface UserWithId extends User {
    id: string
}

const initialState: UserWithId[] = [
    {
        id: "1",
        name: "Chema Ferrandez",
        email: "chema@chema.com",
        github: "MrJark"
    },
    {
        id: "2",
        name: "Juan Ferrandez",
        email: "juan@juan.com",
        github: "Juan"
    },
    {
        id: "3",
        name: "Maria Ferrandez",
        email: "mery@mery.com",
        github: "Maria"
    },
    {
        id: "4",
        name: "Antornio Ferrandez",
        email: "antonio@antonio.com",
        github: "Antonio"
    },
];

export const usersSlice = createSlice({
    // los slice necesitan como mínimo un name, un estado inicial y un reducer
    name: 'users',
    initialState: initialState ,
    reducers: {}
})

export default usersSlice.reducer