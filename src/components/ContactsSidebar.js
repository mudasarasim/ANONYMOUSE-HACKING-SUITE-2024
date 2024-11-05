import React from 'react';
import './ContactsSidebar.css';

const contacts = [
    { id: 1, name: 'Megan Leib', lastMessage: '9 pm at the bar if possible 😊', profilePic: '/path/to/image1.jpg', time: '12 sec' },
    { id: 2, name: 'Dave Corlew', lastMessage: 'Let’s meet for a coffee or some...', profilePic: '/path/to/image2.jpg', time: '3 min' },
    { id: 3, name: 'Jerome Seiber', lastMessage: 'I’ve sent you the annual report', profilePic: '/path/to/image3.jpg', time: '42 min' },
    // Add more contacts as needed
];

const ContactsSidebar = ({ onSelectContact }) => {
    return (
        <div className="contacts-sidebar">
            <div className="contacts-search">
                <input type="text" placeholder="Search..." />
            </div>
            <ul className="contacts-list">
                {contacts.map(contact => (
                    <li key={contact.id} className="contact-item" onClick={() => onSelectContact(contact)}>
                        <img src={contact.profilePic} alt={contact.name} className="contact-avatar" />
                        <div className="contact-info">
                            <div className="contact-name">{contact.name}</div>
                            <div className="contact-last-message">{contact.lastMessage}</div>
                        </div>
                        <div className="contact-time">{contact.time}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactsSidebar;
