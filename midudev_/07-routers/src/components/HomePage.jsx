import { Link } from '../Link';




export const HomePage = () => {

    return (
        <>
            <h1>Home</h1>
            <p>Página de ejemplo para crear un React Router desde cero</p>
            {/* <button onClick={() => navigate('/about')}>About</button> */}
            <Link to='/about'>About</Link>
        </>
    )
}
