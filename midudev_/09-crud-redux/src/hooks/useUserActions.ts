import { UserId, deleteUserById, addNewUser, User } from "../store/users/slice";
import { useAppDispatch } from "./useStore";

export const useUserActions = () => {
    const dispatch = useAppDispatch();
    
    const removeUser = (id: UserId) => {
      dispatch(deleteUserById(id))
    }
    const addUser = ({ name, email, github }: User) => { // las dependencias que le hace falta para crear el User
        dispatch( addNewUser({name, email, github}))
    }

    return {
        removeUser,
        addUser
    }
}