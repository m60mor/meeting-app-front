import './navbar.css';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__logo'>Meety</div>
            <div className='navbar__select'></div>
            <div className='navbar__login'>
                <button className='register-button'>Register</button>
                <button className='login-button'>
                    Login
                    <div className='login-button--underline'></div>
                </button>
            </div>
        </div>
    )
}