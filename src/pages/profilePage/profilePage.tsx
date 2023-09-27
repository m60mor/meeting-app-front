import './homePage.css';
import Navbar from '../../components/navbar/Navbar';
import meet1 from './images/meet1.jpg';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <img src={meet1}></img>
        </>
    )
}