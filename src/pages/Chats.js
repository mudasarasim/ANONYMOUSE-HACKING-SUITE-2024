import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import './Chat.css';

const ChatBox = () => {
    const users = [
        {
            name: 'Vincent Porter',
            status: 'left 7 mins ago',
            isOnline: false,
            image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
            messages: [
                { text: 'Hey, how have you been?', time: '10:10 AM, Today', sentByUser: false },
                { text: 'I’m good, thanks for asking!', time: '10:15 AM, Today', sentByUser: true },
            ],
        },
        {
            name: 'Aiden Chavez',
            status: 'online',
            isOnline: true,
            image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
            messages: [
                { text: 'Hi Aiden, how are you? How is the project coming along?', time: '10:10 AM, Today', sentByUser: false },
                { text: 'Are we meeting today?', time: '10:12 AM, Today', sentByUser: true },
                { text: 'Project has been finished and I have results to show you.', time: '10:15 AM, Today', sentByUser: true },
            ],
        },
        // Add more users as needed
    ];

    const [selectedUser, setSelectedUser] = useState(users[1]); // Default to Aiden Chavez

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
                                                    <div className="col-lg-6 hidden-sm text-right">
                                                        <a href="javascript:void(0);" className="btn btn-outline-secondary"><i className="fa fa-camera"></i></a>
                                                        <a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-image"></i></a>
                                                        <a href="javascript:void(0);" className="btn btn-outline-info"><i className="fa fa-cogs"></i></a>
                                                        <a href="javascript:void(0);" className="btn btn-outline-warning"><i className="fa fa-question"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-history">
                                                <ul className="m-b-0">
                                                    {selectedUser.messages.map((msg, index) => (
                                                        <li key={index} className="clearfix">
                                                            <div className={`message-data ${msg.sentByUser ? 'text-right' : ''}`}>
                                                                <span className="message-data-time">{msg.time}</span>
                                                                {!msg.sentByUser && <img src={selectedUser.image} alt="avatar" />}
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
