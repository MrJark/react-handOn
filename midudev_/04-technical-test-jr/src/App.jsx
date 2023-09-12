

import { useCarImg, useCatFact } from './hooks';
import { Fact, Image } from './components';
import '/src/App.css';



export const App = () => {

    // para manejar el estado de la respuesta y que cambie según nosotros queramos
    // const [fact, setFact] = useState(); // no me hace falta porque lo he mandado al custom hook
    // const [image, setImage] = useState(); // no ,e hace falta porque lo tengo en el customHook
    // const [factError, setFactError] = useState(); // manejo de errores me lo he llevado al custom de las imgs

    const { refreshFact, fact } = useCatFact()
    const { image } = useCarImg( { fact } );

    // const getRandomFact = () => {
    //     fetch(CAT_ENDPOINT_RANDOM_FACT)
    //         .then( res => {
    //             if(!res.ok) {
    //                 setFactError(' Error fetching fact');
    //             }
    //             return res.json()
    //         })
    //         .then( data => {
    //             const { fact } = data;
    //             setFact(fact);
    //         })
    // };

    // manejo del fetch para recuperar el fact
    // useEffect(() => {
    //   fetch(CAT_ENDPOINT_RANDOM_FACT)
    //     .then( res =>{
    //         if(!res.ok) {
    //             setFactError(' Error fetching fact');
    //         }
    //         return res.json()
    //     })
    //     .then( data => {
    //         // aquí es donde tengo el hecho aleatorio por tanto, es donde tengo que recuperar las primeras palabras
    //         const { fact } = data;
    //         setFact(fact);

    //         // const firstTwoWords = fact.split(' ', 2).join(' '); // esta es una manera ya que el .split() tiene un segundo argumento que son el número de elementos a recuperar y para recuperarlos en un string usas el .join() y que quieres que lo separe por un espacio
    //         // // const firstThreeWords = fact.split(' ').slice(0, 3).join(' '); //esta es otra forma. el .split() lo divide a través del espacio, el .slice() le dices de que elemento a que elemento quieres y el .join() te lo los vuelva a juntar en un staring serapardo por lo que le digas
            
    //         // // console.log(firstTwoWords);
    //         // // console.log(firstThreeWords);

            
    //         // fetch(`https://cataas.com/cat/says/${firstTwoWords}?size=50&color=red?json=true`)
    //         //     .then( res => {
    //         //         const { url } = res;
    //         //         setImage(url)
    //         //         // console.log(url);
    //         //     });      
    //     });

    // }, []);
    /* -- */
    // fetch para recuperar el fact pero simplificando la lógica y pudiendo usar customhooks
    
    // useEffect( () => { // lo he movido al custom hook
    //     getRandomFact()
    //         .then( newFact => setFact( newFact ) )
    // } ,[]); // se puede usar así ya que el useEffect, su primero parámetros es una fución

    // fetch para recuperar la imagen con el fact
    // useEffect(() => {
    //     if (!fact) return;
    //     const firstTwoWords = fact.split(' ', 2).join(' '); // esta es una manera ya que el .split() tiene un segundo argumento que son el número de elementos a recuperar y para recuperarlos en un string usas el .join() y que quieres que lo separe por un espacio
    //     // const firstThreeWords = fact.split(' ').slice(0, 3).join(' '); //esta es otra forma. el .split() lo divide a través del espacio, el .slice() le dices de que elemento a que elemento quieres y el .join() te lo los vuelva a juntar en un staring serapardo por lo que le digas
        
    //     // console.log(firstTwoWords);
    //     // console.log(firstThreeWords);

        
    //     fetch(`https://cataas.com/cat/says/${firstTwoWords}?size=50&color=red?json=true`)
    //         .then( res => {
    //             const { url } = res;
    //             setImage(url)
    //             // console.log(url);
    //         });     

    // }, [fact]);

    const handleFact = async () => {
        refreshFact();
    };

    return (
        <main>
            <h1>Gatetes App</h1>

            <section>
                <button onClick={handleFact}>
                    New Img and Fact
                </button>
            </section>
            <section>
                <Fact fact={fact}/>
                <Image fact={fact} image={image}/>
            </section>

            <footer>
                Make with love by <a href="https://linkedin.com/in/mrjark">MrJark</a>  with <a className='midudev' href="https://github.com/midudev/aprendiendo-react/tree/master">Midudev</a>
            </footer>

        </main>
    )
}
