import { Link } from "./Link";

export default function Page404 () {

    return (
        <>
            <div>
                <h1>404 not found</h1>
                <img src="https://midu.dev/images/this-is-fine-404.gif" alt="gift del perro this is fine" />
            </div>
            <Link to='/'>Go to home</Link>
        </>
    )

}