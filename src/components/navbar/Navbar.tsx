import './navbar.css';
import Register from '../register/Register';
import Login from '../login/Login';
import { useNavigate } from 'react-router-dom';

type Props = {
    logged: boolean
}

export default function Navbar({logged=false}: Props) {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        navigate('/');
    }
    return (
        <div className='navbar'>
            <div className='navbar__logo'>Meety</div>
            <div className='navbar__select'></div>
            <div className='navbar__login'>
                <Register />
                {
                logged ? 
                    <button className='button-white' onClick={handleLogout}>Wyloguj <div className='button-white--underline'></div></button> : 
                    <Login />
                }
            </div>
        </div>
    )
}