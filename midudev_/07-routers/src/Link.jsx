import { navigate } from './navigate/navigate';



export function Link ({ target, to, ...props }) {
    const handleClick = (e) => {
        
        // checks para que lo eventos del teclado puedan hacerse( cmd + click, mayus + click ...)
        
        const isMainEvent = e.button === 0; // esto es para asignar el boton del mause primario
        const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey; // para los distintos eventos del teclado ya no es lo mismo un click que un shift + click, etc
        const isManageableEvent = target === undefined || target === '_self'; // manejo por default
        
        if ( isMainEvent && isManageableEvent && !isModifiedEvent) {
            e.preventDefault(); // para evitar que se recarge la pag  pero para que lo demás funcione, debo colocarlo aquí
            navigate(to) // navegación con SPA
        }
    }

    return <a href={to} onClick={handleClick} target={target} { ...props}></a>
    // no hace falta que haga el return del childre, y aun así lo renderiza, gracias a que estoy pasando las porps como spread
}
