import { Suspense, lazy } from 'react'; // este elemento es nativo y es para que no cargue elementos que el user no necesita

import './App.css';
import { APP_ROUTE_FOR_SEARCH } from './constants/paths';

import { Router } from './Router';
import { Route } from './Route';

// import estáticos 👇🏼
import Page404 from './404';
import { AboutPage, HomePage } from './components';

// imports dinámicos 👇🏼 y para renderizarlos, el componente debe estar envuelto en <Supense></Supense>
const LazyAboutPage = lazy( () => import ('./components/AboutPage'));
const LazyHomePage = lazy( () => import('./components/HomePage'));

export const App = () => {
    // el useEffect y el useState lo pongo en la parte del Router ya que es quien va a gestionar las rutas
    // const [currentPath, setCurrentPath] = useState(window.location.pathname); // esto sería una forma 'sencilla' de controlar las rutas que se muestran dependiendo del loation path
    // useEffect(() => {
    //     const onLocationChange = () => {
    //         setCurrentPath(window.location.pathname);
    //     };

    //     // con esta linea solo podemos escuchar la navegación hacia delante, para escuchar hacia atras, añades la siguiente linea
    //     window.addEventListener(EVENTS.PUSHSTATE, onLocationChange); // tanto aquí como al limpial el evento, tienes que pasarle el onLocationChange proqeu sino no sabrá muy bien como limpiar el evento
    //     window.addEventListener(EVENTS.POPSTATE, onLocationChange); // este es para poder ir hacia atrás

    //     return () => {
    //         window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange); // para limpiar el evento
    //         window.removeEventListener( EVENTS.POPSTATE, onLocationChange); // tb hay que limpiar este
    //     }
    // }, [])
    

    return (
        <main>
            <Suspense fallback={null}>
                <Router routes={APP_ROUTE_FOR_SEARCH} defaultComponent={Page404}>
                    <Route path='/' Component={HomePage}/>
                    <Route path='/about' Component={AboutPage}/>
                </Router>
            </Suspense>
            {/* { currentPath === '/' && <HomePage /> /* fomra muy muy simple, pero mal hecha según lo que me pide. Esta es la forma de hacer un Multiple Page Aplication (MPA) */}
            {/* { currentPath === '/about' && <AboutPage />} */}
            {/* <Router routes={APP_ROUTES} defaultComponent={Page404}/> */}
        </main>
    )
}
