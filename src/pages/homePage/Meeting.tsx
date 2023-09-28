import React from 'react';

type Props = {
    city: string,
    date: string,
    location: string,
    image: string,
    color: string
}

export default function Meeting({city='unknown', date='unknown', location='unknown', image, color='#AAA'}: Props) {
    return (
        <div className='meetings-box__meeting' style={{background: `${color}`}}>
            <img src={image}></img>
            <p>{city}</p>
            <div className='meetings-box__meeting__data'>
                <p>{date}</p>
                <p>{location}</p>
            </div>
        </div>
    );
}