'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Send, X, MessageCircle } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  text: string;
}

export function LiveChat() {
  const { language } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Set initial greeting once translation is loaded
  useEffect(() => {
    setMessages([
      {
        id: 'initial',
        sender: 'agent',
        text:
          language === 'am'
            ? 'ጤና ይስጥልኝ! ቀጠሮዎችዎን እንዴት በራስ-ሰር ማስተናገድ እንደምንችል ለማወቅ እዚህ መልዕክት ይጻፉልን። 🇪🇹'
            : 'Hello! Let us know how we can automate your appointments today. 🇪🇹',
      },
    ]);
  }, [language]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;

    // Add user message
    const userMsgId = Date.now().toString();
    const newUserMsg: ChatMessage = {
      id: userMsgId,
      sender: 'user',
      text: trimmed,
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputText('');

    // Simulate Agent Reply
    setTimeout(() => {
      const agentMsgId = (Date.now() + 1).toString();
      const newAgentMsg: ChatMessage = {
        id: agentMsgId,
        sender: 'agent',
        text:
          language === 'am'
            ? 'እናመሰግናለን! የቀጠሮ ማስያዝ መሃንዲሶቻችን ጥያቄዎን እያዩት ነው። ዝርዝር መረጃዎችን እዚህ እናሳውቆታለን።'
            : 'Thank you! An online software architect is looking at your request. We will coordinate details back here immediately.',
      };
      setMessages((prev) => [...prev, newAgentMsg]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Support Widgets */}
      <div className="fixed bottom-6 right-6 z-45 flex flex-col gap-3">
        {/* WhatsApp Floater */}
        <a
          href="https://wa.me/251977784658"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl shadow-xl hover:scale-110 transition-transform cursor-pointer"
          aria-label="WhatsApp Support"
        >
          <i className="fa-brands fa-whatsapp text-2xl"></i>
        </a>

        {/* Live Chat Mock Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer"
          aria-label="Open Live Chat"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>

      {/* Live Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-50 animate-slide-up flex flex-col max-h-[420px]">
          {/* Header */}
          <div className="bg-primary-600 p-4 text-white flex justify-between items-center flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
              <span className="font-bold text-xs">
                {language === 'am' ? 'Booking Solutions ወኪል ቀጥታ' : 'Booking Solutions Agent Live'}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:opacity-80 transition-opacity"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Message List */}
          <div className="p-4 overflow-y-auto space-y-3 flex-1 text-xs min-h-[220px]">
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    isUser
                      ? 'bg-primary-600 text-white ml-auto text-right'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 mr-auto text-left'
                  }`}
                >
                  {msg.text}
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="p-3 border-t border-slate-100 dark:border-slate-800 flex gap-2 bg-slate-50 dark:bg-slate-900/50 flex-shrink-0">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={language === 'am' ? 'መልእክት ይጻፉ...' : 'Type a message...'}
              className="flex-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2.5 rounded-xl text-xs outline-none focus:border-primary-500 focus:bg-white dark:focus:bg-slate-900 transition-colors"
            />
            <button
              onClick={handleSendMessage}
              className="bg-primary-600 hover:bg-primary-700 text-white px-3.5 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
