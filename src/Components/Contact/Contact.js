import React from 'react';
import './Contact.css';
import linkedin from './linkedin_logo.png';
import github from './github_logo.png'

function Contact() {
    return (
        <div className="contact">
            <div>Thank you for visting my digital portfolio!</div><br/>
            <div>If you would like to contact me, I can best be reached through email.</div><br/>
            <div>
                <div>Email: alc3pf@virginia.edu</div>
                <div>Cell Phone: +1 (757) 291-8155</div>
            </div><br/>
            <div style={{display:"inline"}}>
                <img src={linkedin} className="icon" alt="linked in logo"
                    onClick={()=> window.open("https://www.linkedin.com/in/annie-cao-at-uva/", "_blank")}
                />
                <img src={github} className="icon" alt="github logo"
                    onClick={()=> window.open("https://github.com/alc823", "_blank")}
                />
            </div>
        </div>
    )
}

export default Contact;