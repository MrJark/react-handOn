import {createSlice, PayloadAction} from '@reduxjs/toolkit'


const DEFAULT_STATE = [
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

export type UserId  = string;

export interface User {
    name: string,
    email: string,
    github: string
}

export interface UserWithId extends User {
    id: UserId
}

// IIFI
const initialState: UserWithId[] = (() => { // función autoinvocada
    const persistedState = localStorage.getItem("__REDUX__STATE___");
    // if( persistedState ) {
    //     return JSON.parse(persistedState).users;
    // }
    // return DEFAULT_STATE;
    // ternarios
    return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE
})()

export const usersSlice = createSlice({
    // los slice necesitan como mínimo un name, un estado inicial y un reducer
    name: 'users',
    initialState: initialState ,
    reducers: {
        // una forma de hacerlo. Filtrar el id que has querido eliminar y devolver todo lo demás menos este
        // el action puedes tiparlo de la siguiente forma ' : {type: string, payload: UserId} ' o redux-toolkit tiene un método para tipar esto que es el PayloadAction
        // deleteUserById: ( state, action: {type: string, payload: UserId} ) => { 
        deleteUserById: ( state, action: PayloadAction<UserId> ) => { 
            const id = action.payload;
            return state.filter( (user) => user.id !== id)
        },
    }
})

export default usersSlice.reducer;


// lo mejor que puedes hacer cuando tienes un reducer es exportar la acción ya que redux-toolkit te permite hacerlo sin usar el string
export const { deleteUserById } = usersSlice.actions;