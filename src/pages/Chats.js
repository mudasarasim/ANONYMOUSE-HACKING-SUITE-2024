import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import './Chat.css';

const ChatBox = () => {
    // Updated static data for users and their chat history, including the new chats
    const users = [
        {
            name: 'Fatima Ali',
            status: 'online',
            image: 'f1.png',
            messages: [
                { text: 'Hi Kasy hu?', sentByUser: true },
                { text: 'Main thk hun Ap Sonao Sweetu?', sentByUser: false },
                { text: 'Mera aaj Dil kr raha tha university say wapsi pay ap say miloon', sentByUser: true },
                { text: 'main ajonga bike ly kr phir pizza khany jayngy KFC sweetu 😍', sentByUser: false },
                { text: 'Sachiiii', sentByUser: true },
                { text: 'Haan Janu', sentByUser: false },
                { text: 'mere babu ok main uni say off kr k ajongi okay by love you😘', sentByUser: true },
                { text: 'Main wait krunga jaaaaaaaaaaaaaaan 😍:*', sentByUser: false },
            ]
        },
        {
            name: 'Ayesha Malik',
            status: 'Last seen: offline',
            image: 'f2.jpg',
            messages: [
                { text: 'bhai majhe aap se kach kahana hay.', sentByUser: true },
                { text: 'kiya aap chahte hen kah min call karon?', sentByUser: false },
                { text: 'nihen nihen. mere waldin abhi kamare min hen ya waqei zati hay hui hy mere sath😓.', sentByUser: true },
                { text: 'acha... ya kiya hay?', sentByUser: false },
                { text: 'mainy apane GF/Wife ko dhokah dite huvay pakada😌.', sentByUser: true },
                { text: 'Sachhh main yarrrr! aap ko kise patah chala?', sentByUser: false },
                { text: 'min ne atafaq se is ke Mobile par sari chezin dekh lin.', sentByUser: true },
            ]
        },
        {
            name: 'Usman Tariq',
            status: 'online',
            image: 'b1.jpeg',
            messages: [
                { text: 'Tumhay pata hy?', sentByUser: true },
                { text: 'Kiya?', sentByUser: false },
                { text: 'Meri jan hu tum hahahahahah😂', sentByUser: true },
                { text: 'Ohhh Really hahahah😂', sentByUser: false },
                { text: 'Meri Sans hu tum', sentByUser: true },
                { text: 'Meri Dhardkan hu tum😍', sentByUser: true },
                { text: 'Or?', sentByUser: false },
                { text: 'Mera Subkuch tum hi hu😘', sentByUser: true },
                { text: 'Awwwwww I love you My life😍', sentByUser: false },
            ]
        },
        {
            name: 'Sara Javed',
            status: 'offline',
            image: 'f3.jpg',
            messages: [
                { text: 'Hi, Kasy hn ap?', sentByUser: true },
                { text: 'Ji jnb Min thk hon ap kasy hu sweetu my life😘', sentByUser: false },
                { text: 'Kab mil rahy hn jnb?', sentByUser: true },
                { text: 'W8 Papa', sentByUser: false },
                { text: 'Jan jab ap bolo mil laingy abhi ajon kia hahahahah…😂', sentByUser: true },
                { text: 'CZN ki Shadi Py Mulaqat hugi', sentByUser: false },
                { text: 'Yes my love…..😘', sentByUser: true },
            ]
        },
        {
            name: 'Imtiaz Ali',
            status: 'online',
            image: 'b2.jpg',
            messages: [
                { text: 'are, kiya tam wahan ho? min tamahin Cal kar raha hon lican koi jawab nihen aaya.', sentByUser: true },
                { text: 'Yes main yahi houn hukam…..😍', sentByUser: false },
                { text: 'acha, kiya min aap ko khane ke liye bahar le jaon😘?', sentByUser: true },
                { text: 'bahat acha, kahan? Main 1PM tak free hun usk bad wapis jany ki zaroot hugi mujy…..', sentByUser: false },
                { text: 'aap ke khayal mian fast food kiya hai?', sentByUser: true },
                { text: 'majhe ya pasand hay, lican min aaj waqei is ke mod min nihen hon.', sentByUser: false },
                { text: 'G mujy b nhi lykin, laajwab! to phar dekhon ga😘.', sentByUser: true },
                { text: 'Chalo mere gher chalty hn mama ny bht axha lunch bnaya huga…..', sentByUser: false },
            ]
        },
        {
            name: 'Bilal Shah',
            status: 'offline',
            image: 'b33.jpg',
            messages: [
                { text: 'Hi Kasy hu?', sentByUser: true },
                { text: 'Mera aaj Dil kr raha tha university say wapsi pay ap say miloon😘', sentByUser: false },
                { text: 'Sachiiii', sentByUser: true },
                { text: 'Haan Janu😘', sentByUser: false },
                { text: 'mere babu ok main uni say off kr k ajongi okay by love you😘', sentByUser: true },
                { text: 'Main wait krunga jaaaaaaaaaaaaaaan😘 :*', sentByUser: false },
            ]
        },
        {
            name: 'Jon Smith',
            status: 'online',
            image: 'assets/faces/face21.jpg',
            messages: [
                { text: 'Welcome David', sentByUser: true },
                { text: 'Hello everyone.', sentByUser: false },
                { text: 'Hi. You can join our meeting at 10 with this ID:967851', sentByUser: true },
                { text: 'DOCX.file', sentByUser: true },
                { text: 'You can check the document first.', sentByUser: false },
                { text: 'Thanks. I will be there in time🥰.', sentByUser: true },
                { text: 'We should do a team bonding trip some time.', sentByUser: false },
                { text: 'What about a hiking trip?', sentByUser: true },
                { text: 'OK.', sentByUser: false },
                { text: 'That could be a fun activity, set the date and send the invites😍.', sentByUser: true },
            ]
        },
        {
            name: 'Asad Shafiq',
            status: 'offline',
            image: 'b4.jpg',
            messages: [
                { text: 'helo maryan ki salgirah agle atwar ko hay😍, is ne majhe Invite kiya, kiya is ne aap ko Invite kiya tha?', sentByUser: true },
                { text: 'is ne majhe bhi balaya. aap ise is ki salgirah par kiya line ja rahe hen?', sentByUser: false },
                { text: 'iye dekhte hen, is ne zikar kiya kah ise gulabi rang pasand hay.', sentByUser: true },
                { text: 'min ise ek khoobsurt gulabi Nootbook kiyon na don? scol ke samane wali dakan min bahat achi stationari hay.', sentByUser: false },
                { text: 'ya ek acha khayal hay, min dekhon ga kah min is se kiya haasil kar sakta hon, kiya aap ko lagta hay kah wah ek Watch pasand kare gi?', sentByUser: true },
                { text: 'majhe esa lagta hay. majhe yaad hay kah wah mosiqi sanana pasand karti hay.', sentByUser: false },
                { text: 'chalo kal ise Uthaty hen.', sentByUser: true },
            ]
        }
    ];

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
                                                        <img src={user.image} height={50} alt="avatar" />
                                                        <div className="about">
                                                            <div className="name">{user.name}</div>
                                                            <div className="status">
                                                                <i className={`fa fa-circle ${user.status === 'online' ? 'online' : 'offline'}`}></i> {user.status}
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
                                                            <small>{selectedUser.status}</small>
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
