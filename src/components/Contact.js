// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './contact.css';

const Contact = ({ photo, name, phone, email }) => {
    return (
        <div>
            <div className="card">
                <div className='avatar'>
                    <img src={photo}/>
                </div>
                <div className="contact">
                    <p className='name'>{ name }</p>
                    <p>{ phone }</p>
                    <p>{ email }</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;