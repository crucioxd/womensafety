import { useState } from 'react';
import { FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import safetyTips from './data/safetyTips.json';
import policies from './data/policies.json';
import emergencyContacts from './data/emergencyContacts.json';
import './Chatbot.css';

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "👋 Welcome! I’m Sumitra, your safety assistant. You can ask me about:\n- 🔹 Safety Tips\n- 📜 Policies & Schemes\n- 🚨 Emergency Contacts\nHow can I help you today?" }
  ]);
  const [inputText, setInputText] = useState('');

  const getBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    
    // Safety tips with motivation
    if (lowerInput.includes('tip') || lowerInput.includes('advice')) {
      const randomTip = safetyTips.tips[Math.floor(Math.random() * safetyTips.tips.length)];
      const randomQuote = safetyTips.motivational_quotes[Math.floor(Math.random() * safetyTips.motivational_quotes.length)];
      return `🔹 *Safety Tip:* ${randomTip}\n💡 *Remember:* "${randomQuote}"`;
    }

    // Policies
    if (lowerInput.includes('policy') || lowerInput.includes('scheme')) {
      return `📜 *Government Policies & Schemes:*\n` + 
        policies.policies.map(policy => `🔹 *${policy.name}:* ${policy.details}`).join('\n\n');
    }

    // Emergency contacts
    if (lowerInput.includes('emergency') || lowerInput.includes('contact')) {
      return `🚨 *Emergency Contacts:*\n` + 
        Object.entries(emergencyContacts.helpline_numbers).map(([country, number]) => 
          `🔹 *${country}:* ${number}`).join('\n');
    }

    // Default response
    return "I'm here to help with women's safety information. 🔹 Ask me about *safety tips, policies, or emergency contacts*!";
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    setMessages(prev => [
      ...prev, 
      { sender: 'user', text: inputText },
      { sender: 'bot', text: getBotResponse(inputText) }
    ]);

    setInputText('');
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chat-header">
        <span> <FaRobot className='robot-icon'/> Sumitra</span>
        <FaTimes className="close-btn" onClick={onClose} />
      </div>

      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="Ask about women's safety..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="send-button1" onClick={handleSend}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
