import { Link } from '../Link';



export const AboutPage = () => {

    return (
        <>
            <h1>About</h1>
            <div>
                <p>Creando un clon del React Router</p>
                <img src="https://pbs.twimg.com/profile_images/1622194089545318400/JQuVD-m1_400x400.png" alt="foto de MrJark" />
            </div>
            {/* <button onClick={() => navigate('/')}>Home</button> */}
            <Link to='/'>Home</Link>
        </>
    )
}
