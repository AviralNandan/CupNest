"use client";

import React, { useState } from 'react';
import { Send, Bot, MessageCircle, X } from 'lucide-react';

const PaperCupChatbot = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hello! I'm your Paper Cup Expert. Ask me anything about paper cups!", 
      sender: 'bot' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const paperCupKnowledge = {
    types: [
      "Single-wall cups",
      "Double-wall cups", 
      "Insulated cups",
      "Biodegradable cups",
      "Compostable cups"
    ],
    lifecycle: [
      "Raw material collection (wood pulp)",
      "Pulp processing",
      "Paper sheet formation",
      "Cup molding",
      "Coating application",
      "Packaging and distribution",
      "Usage",
      "Disposal/Recycling"
    ],
    cost: {
      standard: "₹3-₹10 per cup",
      premium: "₹12-₹35 per cup",
      factors: [
        "Material quality",
        "Coating type", 
        "Quantity ordered"
      ]
    },
    health: {
      concerns: [
        "Potential chemical leaching",
        "Microplastic contamination",
        "BPA risks in some linings"
      ],
      safety: "Use cups designed for intended beverage temperature"
    }
  };

  const processQuery = (query: string) => {
    const lowerQuery = query.toLowerCase();
    
    const matchKeywords = (keywords: any) => 
      keywords.some((keyword:any) => lowerQuery.includes(keyword));

    if (matchKeywords(['type', 'kinds'])) {
      return `Paper cup types include: ${paperCupKnowledge.types.join(', ')}`;
    }

    if (matchKeywords(['lifecycle', 'process'])) {
      return `Paper cup lifecycle stages: ${paperCupKnowledge.lifecycle.join(' → ')}`;
    }

    if (matchKeywords(['cost', 'price', 'expensive'])) {
      return `Cost ranges: Standard ₹3-₹10, Premium ₹12-₹35 per cup`;
    }

    if (matchKeywords(['health', 'safe', 'danger'])) {
      return `Health Concerns: ${paperCupKnowledge.health.concerns.join(', ')}`;
    }

    return "I can help with questions about paper cup Types, Lifecycle, Cost, and Health concerns.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMessage = { 
      id: messages.length + 1, 
      text: input, 
      sender: 'user' 
    };

    const botResponse = { 
      id: messages.length + 2, 
      text: processQuery(input), 
      sender: 'bot' 
    };

    setMessages([...messages, newUserMessage, botResponse]);
    setInput('');
  };

  return (
    <>
      {/* Floating Chat Toggle Button */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 z-50"
      >
        {isChatOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chatbot Container */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-4 w-96 bg-white shadow-lg rounded-xl border border-green-600 z-[10000]">
          <div className="bg-green-600 text-white p-4 rounded-t-xl flex items-center">
            <Bot className="mr-2" />
            <h2 className="font-bold">Paper Cup Expert</h2>
          </div>
          
          <div className="h-96 overflow-y-auto p-4 space-y-2">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === 'bot' 
                    ? 'bg-green-100 text-green-800 self-start' 
                    : 'bg-emerald-100 text-emerald-800 self-end ml-auto'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          
          <div className="flex p-4 border-t border-green-300">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about paper cups..."
              className="flex-grow p-2 border rounded-l-lg border-green-300"
            />
            <button 
              onClick={handleSend}
              className="bg-green-600 text-white p-2 rounded-r-lg hover:bg-green-700"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PaperCupChatbot;