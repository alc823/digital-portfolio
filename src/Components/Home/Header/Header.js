import React from 'react';
import './Header.css';
import profile from './annie_cao_photo.JPG';
import {Image} from 'react-bootstrap';

function Header() {
    return(
        <div className='home-header'>
            <Image src={profile} alt="profile picture" className="profile-picture" roundedCircle/>
        </div>
    )
}

export default Header;