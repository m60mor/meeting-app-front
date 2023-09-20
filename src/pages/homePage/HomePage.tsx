import './homePage.css';
import Navbar from '../../components/navbar/Navbar';
import Footbar from '../../components/footbar/Footbar';
import { useState } from 'react';

export default function HomePage() {
    const [count, setCount] = useState(0);
    return (
        <>
            <Navbar />
            <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
            <Footbar />
        </>
    )
}