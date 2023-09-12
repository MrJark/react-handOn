import { useEffect } from 'react';



export const SearchPage = ({ routeParams }) => {
    useEffect( () => {
        document.title = `You have search: ${routeParams.query}`
    } ,[]);

    return (
        <>
            <h2>You have search: {routeParams.query}</h2>
        </>
    )
}
