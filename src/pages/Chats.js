import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import ContactsSidebar from '../components/ContactsSidebar';
import ChatInterface from '../components/ChatInterface';
import './Chat.css';

const ChatBox = () => {
    const [selectedContact, setSelectedContact] = useState(null);

    const handleContactSelect = (contact) => {
        setSelectedContact(contact);
    };

    return (
        <>
            <div className="container-scroller">
                <Sidebar />
                <div className="container-fluid page-body-wrapper">
                    <nav className="navbar p-0 fixed-top d-flex flex-row">
                        <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
                            <a className="navbar-brand brand-logo-mini" href="index.html">
                                <img src="../../../assets/images/logo-mini.svg" alt="logo" />
                            </a>
                        </div>
                        <Navbar />
                    </nav>
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="chat-container">
                                <ContactsSidebar onSelectContact={handleContactSelect} />
                                {selectedContact ? (
                                    <ChatInterface contact={selectedContact} />
                                ) : (
                                    <div className="chat-placeholder">Select a contact to start chatting</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatBox;
