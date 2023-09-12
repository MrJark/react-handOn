import { useState, useEffect, useRef } from 'react';


export const useSearch = () => {

    const [search, setSearch] = useState('');
    const [error, setError] = useState(null);
    const isFirstInput = useRef(true); // este es para que el error del inicio no nos salga

    useEffect(() => {
        
        if ( isFirstInput.current ) { // se utiliza para saber si es la primera vez que se renderiza el componente
            isFirstInput.current = search === ''
            return
        }

        if ( search === '' ) {
            setError('You need to fill the field')
            return
        }
        if ( search.match(/^\d+$/) ) {
            setError('Cannot be searched with only numbers')
            return
        }
        if ( search.length < 3 ) {
            setError('There must be at least three characters')
            return
        }

      setError(null)
    }, [search])
    
    return { search, setSearch, error }
};