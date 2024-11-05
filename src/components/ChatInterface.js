import React, { useState } from 'react';
import './ChatInterface.css';

const ChatInterface = ({ contact }) => {
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hello! How can I assist you today?' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim() === '') return;

        const newMessage = { sender: 'user', text: input };
        setMessages([...messages, newMessage]);
        setInput('');

        // Simulate bot response
        setTimeout(() => {
            const botResponse = { sender: 'bot', text: 'This is a response from the bot.' };
            setMessages(prevMessages => [...prevMessages, botResponse]);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="chat-interface">
            <div className="chat-header">
                <h3>{contact ? contact.name : 'Chat Support'}</h3>
            </div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div 
                        key={index} 
                        className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default ChatInterface;
