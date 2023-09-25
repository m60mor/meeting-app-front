import './navbar.css';
import Register from '../register/Register';
import Login from '../login/Login';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__logo'>Meety</div>
            <div className='navbar__select'></div>
            <div className='navbar__login'>
                <Register />
                <Login />
            </div>
        </div>
    )
}