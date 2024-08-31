// src/components/ChatBot.js
import { useState } from 'react';
import axios from 'axios';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    setMessages([...messages, { text: input, sender: 'user' }]);
    const response = await axios.post('/api/chat', { question: input });
    setMessages([...messages, { text: input, sender: 'user' }, { text: response.data.answer, sender: 'bot' }]);
    setInput('');
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            {msg.text}
          </div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatBot;
