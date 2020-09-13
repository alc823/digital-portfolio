import React from 'react';
import './Contact.css';

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
            <a href={"https://www.linkedin.com/in/annie-cao-at-uva/"}>
                <img src={"https://image.flaticon.com/icons/svg/174/174857.svg"} className="icon" alt="linked in logo"/>
            </a>
            <a href={"https://github.com/alc823"}>
                <img src={"https://image.flaticon.com/icons/png/512/25/25231.png"} className="icon" alt="github logo"/>
            </a>
            </div>
            
        </div>
    )
}

export default Contact;