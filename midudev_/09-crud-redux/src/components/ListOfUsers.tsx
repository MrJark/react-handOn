import {
    Card,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableBody,
    Title,
    Badge,
    // BadgeDelta,
    // DeltaType,
} from "@tremor/react";

// import { useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from "../hooks/useStore";  
import { UserId, deleteUserById } from "../store/users/slice";
import { useUserActions } from "../hooks/useUserActions";

//  // Esto lo puedo eliminar porque ya lo he creado en la parye del slice
//   const users: {
//     id: string,
//     name: string;
//     email: string,
//     github: string,
//   }[] = [ 
//     {
//         id: "1",
//         name: "Chema Ferrandez",
//         email: "chema@chema.com",
//         github: "MrJark"
//     },
//     {
//         id: "2",
//         name: "Juan Ferrandez",
//         email: "juan@juan.com",
//         github: "Juan"
//     },
//     {
//         id: "3",
//         name: "Maria Ferrandez",
//         email: "mery@mery.com",
//         github: "Maria"
//     },
//     {
//         id: "4",
//         name: "Antornio Ferrandez",
//         email: "antonio@antonio.com",
//         github: "Antonio"
//     },
    
//   ];
  
  export function ListOfUsers() {
    // con la linea de users puedo leer cualquier elemento
    const users = useAppSelector( (state) => state.users) // este .users viene del nombre que le has puesto al reducer del store (store/index.ts)
    
    // Estas 3 líneas de código no es recomendable hacerlas porque estás atando y lo haces como un hook
    // const dispatch = useAppDispatch();
    
    // const handleRemoveUser = (id: UserId) => {
    //   dispatch(deleteUserById(id))
    // }

    const {removeUser} = useUserActions()

    return (
      <Card>
        <Title>
            Users
            <Badge style={{ marginLeft: '8px', backgroundColor: '#ab79dd', borderRadius: '100%'}}>{users.length}</Badge>
        </Title>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell >Id</TableHeaderCell>
              <TableHeaderCell >Email</TableHeaderCell>
              <TableHeaderCell >Actions</TableHeaderCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.name}>
                <TableCell className=" flex flex-row items-center">
                    <img 
                        style={{ width: '48px', height: '48px', borderRadius: '100%', marginRight: '8px'}}
                        src={`https://unavatar.io/github/${item.github}`} 
                        alt={`github photo of ${item.github}`} 
                    />
                    {item.name}</TableCell>
                <TableCell >{item.id}</TableCell>
                <TableCell >{item.email}</TableCell>
                <TableCell className="  mr-4">
                    <button type="button">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </button>
                    <button onClick={() => removeUser(item.id)} type="button">
                        <svg 
                          aria-label="Remove Element" 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={1.5} 
                          stroke="currentColor" 
                          className="w-6 h-6"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  }