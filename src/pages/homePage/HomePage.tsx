import './homePage.css';
import Navbar from '../../components/navbar/Navbar';
import Footbar from '../../components/footbar/Footbar';
import meet1 from './images/meet1.jpg';
import meet2 from './images/meet2.jpg';
import meet3 from './images/meet3.jpg';
import func1 from './images/func1.png';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <div className='join-box'>
                <div className='join-box__text'>
                Gotowi na niezapomniane chwile? Dołącz do naszej sieci, poznaj nowych ludzi i odkryj setki wyjątkowych spotkań i imprez w twojej okolicy. Planowanie rozrywki nigdy nie było łatwiejsze!
                </div>   
                <button className='join-box__button'>
                    Dołącz do nas!
                    <div className='join-box__button--underline'></div>
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

            <div className='functionalities'> 
                <div className='functionalities__func'>
                    <div className='functionalities__func__text'>
                        Mapa Spotkań
                        Znajdź miejsce spotkania na mapie lub wyszukaj publiczne spotkania 
                    </div>
                    <img src={func1}></img>
                </div>
                <div className='functionalities__func'>
                    <img src={func1}></img>
                    <div className='functionalities__func__text'>
                        Mapa Spotkań
                        Znajdź miejsce spotkania na mapie lub wyszukaj publiczne spotkania 
                    </div>
                </div>
            </div>

            <Footbar />
        </>
    )
}