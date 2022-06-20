// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './contact.css';

const Contact = ({ data }) => {
    return (
        <div>
            <div className="card">
                <div className='avatar'>
                    <img src={ data.photo }/>
                </div>
                <div className="contact">
                    <p className='name'>{ data.name }</p>
                    <p>{ data.phone }</p>
                    <p>{ data.email }</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;