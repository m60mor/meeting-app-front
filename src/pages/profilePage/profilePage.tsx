import './profilePage.css';
import Navbar from '../../components/navbar/Navbar';
import meet1 from '../homePage/images/meet1.jpg';

export default function ProfilePage() {
    return (
        <>
            <Navbar logged={true}/>
            <img src={meet1}></img>
        </>
    )
}