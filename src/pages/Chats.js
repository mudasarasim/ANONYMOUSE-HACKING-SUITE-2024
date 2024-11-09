import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import './Chat.css';

const generateRandomUser = () => {
    // List of Pakistani names
    const names = [
        'Ahmed Khan', 'Fatima Ali', 'Ali Rehman', 'Sara Javed', 'Usman Tariq',
        'Ayesha Malik', 'Bilal Shah', 'Zainab Bhatti', 'Muneeb Akhtar', 'Mariam Khan',
        'Hasan Ali', 'Nadia Hussain', 'Faisal Mehmood', 'Hina Iqbal', 'Rashid Ahmed',
        'Sana Jamil', 'Omar Farooq', 'Zara Bashir', 'Kashan Saeed', 'Noor Fatima',
        'Tariq Mahmood', 'Mehwish Khan', 'Kamran Shah', 'Miraal Hussain', 'Asad Mehmood'
    ];

    const statusMessages = [
        'left 7 mins ago', 'online', 'left 1 hour ago', 'offline', 'last seen 2 days ago'
    ];

    // List of 25 image URLs (face1.jpg to face25.jpg)
    const imageUrls = Array.from({ length: 25 }, (_, index) => `avt.jpg`);

    // Randomly select a name, status, and image
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomStatus = statusMessages[Math.floor(Math.random() * statusMessages.length)];
    const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    const isOnline = randomStatus === 'online';

    // Generate unique messages for each user
    const messages = [
        { text: `Hey ${randomName.split(" ")[0]}, how have you been?`, sentByUser: Math.random() < 0.5 },
        { text: `What are you up to, ${randomName.split(" ")[0]}?`, sentByUser: Math.random() < 0.5 },
        { text: `Let’s catch up soon, ${randomName.split(" ")[0]}!`, sentByUser: Math.random() < 0.5 }
    ];

    return {
        name: randomName,
        status: randomStatus,
        isOnline,
        image: randomImage,
        messages: messages
    };
};

const ChatBox = () => {
    const users = Array.from({ length: 25 }, generateRandomUser);  // Increased to 25 users

    const [selectedUser, setSelectedUser] = useState(users[0]); // Default to first user

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    return (
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
                        <div className="container">
                            <div className="row clearfix">
                                <div className="col-lg-12">
                                    <div className="card chat-app">
                                        <div id="plist" className="people-list">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-search"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Search..." />
                                            </div>
                                            <ul className="list-unstyled chat-list mt-2 mb-0">
                                                {users.map((user) => (
                                                    <li key={user.name} className={`clearfix ${selectedUser.name === user.name ? 'active' : ''}`} onClick={() => handleUserClick(user)}>
                                                        <img src={user.image} alt="avatar" />
                                                        <div className="about">
                                                            <div className="name">{user.name}</div>
                                                            <div className="status">
                                                                <i className={`fa fa-circle ${user.isOnline ? 'online' : 'offline'}`}></i> {user.status}
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="chat">
                                            <div className="chat-header clearfix">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <img src={selectedUser.image} alt="avatar" />
                                                        <div className="chat-about">
                                                            <h6 className="m-b-0">{selectedUser.name}</h6>
                                                            <small>Last seen: {selectedUser.status}</small>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="chat-history">
                                                <ul className="m-b-0">
                                                    {selectedUser.messages.map((msg, index) => (
                                                        <li key={index} className="clearfix">
                                                            <div className={`message-data ${msg.sentByUser ? 'text-right' : ''}`}>
                                                                <span className="message-data-time">{msg.time}</span>
                                                                {/* {!msg.sentByUser && <img src={selectedUser.image} alt="avatar" />} */}
                                                            </div>
                                                            <div className={`message ${msg.sentByUser ? 'my-message' : 'other-message'} ${msg.sentByUser ? 'float-right' : ''}`}>
                                                                {msg.text}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="chat-message clearfix">
                                                <div className="input-group mb-0">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fa fa-send"></i></span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Enter text here..." />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
