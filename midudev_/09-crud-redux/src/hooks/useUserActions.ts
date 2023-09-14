import { UserId, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./useStore";

export const useUserActions = () => {
    const dispatch = useAppDispatch();
    
    const removeUser = (id: UserId) => {
      dispatch(deleteUserById(id))
    }

    return {
        removeUser
    }
}