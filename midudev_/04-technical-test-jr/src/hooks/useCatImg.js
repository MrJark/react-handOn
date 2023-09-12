import { useEffect, useState } from "react"


export const useCarImg = ( { fact } ) => {

    const [image, setImage] = useState();
    const [factError, setFactError] = useState(); // manejo de errores

    useEffect(() => {
        if(!fact) return

        const firstTwoWords = fact.split(' ', 2).join(' ');

        fetch(`https://cataas.com/cat/says/${firstTwoWords}?size=50&color=red?json=true`)
            .then( res => {
                if(!res.ok) {
                    setFactError('Error fetching fact');
                }
                const { url } = res;
                setImage(url)
                // console.log(url);
            });     

    }, [fact])
    
    return { image } // los customHooks siempre deben devolver algo, en este caso, la img den string
}
