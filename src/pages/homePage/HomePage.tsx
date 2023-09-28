import './homePage.css';
import Navbar from '../../components/navbar/Navbar';
import Footbar from '../../components/footbar/Footbar';
import Meeting from './Meeting';
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
                <Meeting city='Warszawa' date='Pt. 12-00' location='Rondo Daszyńskiego' image={`${meet1}`} color='#B88800'/>
                <Meeting city='Gliwice' date='Czw. 18-00' location='Zwycięstwa 11' image={`${meet2}`} color='#449'/>
                <Meeting city='Koszalin' date='Sob 9-00' location='Wesoła 15' image={`${meet3}`} color='#696'/>

                <Meeting city='Warszawa' date='Pt. 12-00' location='Rondo Daszyńskiego' image={`${meet1}`} color='#B88800'/>
                <Meeting city='Gliwice' date='Czw. 18-00' location='Zwycięstwa 11' image={`${meet2}`} color='#449'/>
                <Meeting city='Koszalin' date='Sob 9-00' location='Wesoła 15' image={`${meet3}`} color='#696'/>
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