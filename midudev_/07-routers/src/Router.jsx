import { Children, useEffect, useState } from "react";
import { EVENTS } from "./constants/constants";
import { match } from 'path-to-regexp'
import { getCurrentPath } from "./utils";


export function Router ({children , routes = [], defaultComponent: DefaultComponent = () => null }) { // gracias al DefaultComponent puedo hacer que sea la propia pagina 404
    
    // el Router tiene que renderizar una ruta que por defecto será un componente que devuelva un null
    const [currentPath, setCurrentPath] = useState(getCurrentPath()); // esto sería una forma 'sencilla' de controlar las rutas que se muestran dependiendo del loation path
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(getCurrentPath());
        };

        // con esta linea solo podemos escuchar la navegación hacia delante, para escuchar hacia atras, añades la siguiente linea
        window.addEventListener(EVENTS.PUSHSTATE, onLocationChange); // tanto aquí como al limpial el evento, tienes que pasarle el onLocationChange proqeu sino no sabrá muy bien como limpiar el evento
        window.addEventListener(EVENTS.POPSTATE, onLocationChange); // este es para poder ir hacia atrás

        return () => {
            window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange); // para limpiar el evento
            window.removeEventListener( EVENTS.POPSTATE, onLocationChange); // tb hay que limpiar este
        }
    }, []);

    let routeParams = {};

    // añadimos las rutas que vienen del children donde el Children ( en mayus ) es una propiedad de React
    const routesFromChildrens = Children.map( children, ({ props, type }) => {
        const { name } = type;
        const isRoute = name === 'Route';

        return isRoute ? props : null; // esto debería devolver un array de objetos
    })

    // para poder usar las rutas que estás leyendo de las props es encadenarlas por las que nos están pasando por los children
    const routesToUse = routes.concat( routesFromChildrens ).filter(Boolean);

    // const Page = routes.find( ({ path }) => path === currentPath)?.Component; // sin rutas dinámicas
    const Page = routesToUse.find( ({ path }) => {
        // hemos usado el path-to-regexp para poder detectar las rutas dinámicas como es el /search/:query
        if ( path === currentPath ) return true;
        
        const matcherUrl = match(path, { decode: decodeURIComponent }); // esto es para saber si la url ha hehco match con el path y para decodificarlo
        const matched = matcherUrl(currentPath);

        if( !matched ) return false;

        // guardar los parámetros que eran dinámicos y que se han extraido del path-to-regexp
        // ejemp: si la ruta es /search/:query y la url es /search/javascript el matched.params.query === 'javascript' 
        routeParams = matched.params; // aquí es donde se guardará el query que has querido sacar que el objeto será { query: 'javascript } el cual corresponderá a la ruta search/javascript
        
        return true; // se hace un return true porque el método .find() necesita de el
    })?.Component; 
    
    
    return Page 
        ? <Page routeParams={routeParams} /> 
        : <DefaultComponent routeParams={routeParams} />
}
