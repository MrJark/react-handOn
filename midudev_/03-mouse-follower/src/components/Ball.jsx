import { useEffect, useState } from 'react';
import '../index.css';


export const Ball = () => {

    const [enabled, setEnabled] = useState(false);
    const [position, setPosition] = useState({x: 100, y: 100 }); // es buena práctica el inicializar el useState si sabes alguno de sus valores, si no tienes ningún valor, se inicializa con null porque das a entender que no sabes nada. EN este caso, inicializamos el cursor en el 50, 50

    // pointer move effecct
    useEffect( () => {
        const handleMove = ( event ) => {
            const { clientX, clientY } = event;
            // console.log('handleMuve', { clientX, clientY });
            setPosition( { x: clientX, y: clientY } )
        };

        if ( enabled ) {
            window.addEventListener('pointermove', handleMove);
        }

        // este es el segundo argumento del useEffect y se le llama 'limpieza' ya que para quitar ciertas 'suscripciones' a eventos cuando pasen x cosas, lo que pongas dentro de esta función, deberá de dejar de hacer dicho efecto
        // este cleanup se ejecuta cuando se desmonta el componente, se desactiva, y cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
        return () => { 
            window.removeEventListener('pointermove', handleMove);
        }
    }, [enabled])

    // change body className
    useEffect(() => {
      document.body.classList.toggle( 'no-cursor', enabled )
    
      return () => {
        document.body.classList.remove('no-cursor')
      }
    }, [enabled])

    return (
        <main className="section-center">
            <div
                className='ball-style'
                style={{
                    transform: `translate(${position.x}px, ${position.y}px )`
                }}
            ></div>
            <h3>The Magic Mouse Follow</h3>
            <button
                onClick={() => setEnabled(!enabled)}
            >
                { enabled ? 'Desactivar Follow' : 'Activar Follow'}
            </button>
        </main>
    )
}
