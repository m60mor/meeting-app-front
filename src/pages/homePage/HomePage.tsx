import './homePage.css';
import Navbar from '../../components/navbar/Navbar';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <div className='join-box'>
                <div className='join-text'>
                Gotowi na niezapomniane chwile? Dołącz do naszej sieci, poznaj nowych ludzi i odkryj setki wyjątkowych spotkań i imprez w twojej okolicy. Planowanie rozrywki nigdy nie było łatwiejsze!
                </div>   
                <button className='join-button'>
                    Dołącz do nas!
                    <div className='join-button--underline'></div>
                </button>
            </div>
            
        </>
    )
}