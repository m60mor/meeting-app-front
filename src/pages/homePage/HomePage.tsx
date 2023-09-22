import './homePage.css';
import Navbar from '../../components/navbar/Navbar';
import Footbar from '../../components/footbar/Footbar';
import meet1 from './meet1.jpg';
import meet2 from './meet2.jpg';
import meet3 from './meet3.jpg';
import func1 from './func1.png';

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
            <div className='meetings-box'>
                <img src={meet1}></img>
                <img src={meet2}></img>
                <img src={meet3}></img>
                <img src={meet1}></img>
                <img src={meet2}></img>
                <img src={meet3}></img>
            </div>

            <div className='functionalities-box'> 
                <div className='functionality'>
                    <div className='functionality-text'>
                        Mapa Spotkań
                        Znajdź miejsce spotkania na mapie lub wyszukaj publiczne spotkania 
                    </div>
                    <img src={func1}></img>
                </div>
                <div className='functionality'>
                    <img src={func1}></img>
                    <div className='functionality-text'>
                        Mapa Spotkań
                        Znajdź miejsce spotkania na mapie lub wyszukaj publiczne spotkania 
                    </div>
                </div>
            </div>

            <Footbar />
        </>
    )
}