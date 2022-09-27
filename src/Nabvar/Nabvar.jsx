import {Link} from 'react-router-dom'

export const Nabvar = () => {
    return (
        <div>
            <h1>Taller</h1>
           <ul>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
           </ul>
        </div>
    )
}
