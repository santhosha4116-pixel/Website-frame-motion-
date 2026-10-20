
import React, { useState } from 'react';

function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');

  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: 'Hi! 👋 Welcome to TripMate. Where would you like to travel?'
    }
  ]);

  // Demo replies only — not real AI
  const getReply = (message) => {
    const text = message.toLowerCase();

    if (text.includes('ooty')) {
      return 'Ooty is a lovely hill station! 🌿 Visit Ooty Lake, the Botanical Garden, and Doddabetta Peak.';
    }

    if (text.includes('chennai')) {
      return 'Explore Marina Beach, Kapaleeshwarar Temple, and Mahabalipuram near Chennai! 🌊';
    }

    if (text.includes('budget') || text.includes('cheap')) {
      return 'For a budget trip, compare bus or train fares, choose affordable stays, and plan nearby attractions together. 💰';
    }

    if (text.includes('hello') || text.includes('hi')) {
      return 'Hello, traveller! 😊 Tell me which place you want to explore.';
    }

    return 'That sounds exciting! 🌍 Try asking me about Ooty, Chennai, or budget travel. These are sample replies in this demo.';
  };

  const sendMessage = (e) => {
    e.preventDefault();

    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const reply = getReply(trimmedInput);

    setMessages((previous) => [
      ...previous,
      { role: 'user', text: trimmedInput },
      { role: 'bot', text: reply }
    ]);

    setInput('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-[1000]">
      {/* Chat window */}
      {isOpen && (
        <div className="mb-4 flex h-[430px] w-[calc(100vw-40px)] max-w-[360px]
                        flex-col overflow-hidden rounded-2xl border
                        border-[#E6DED7] bg-white shadow-2xl">

          {/* Header */}
          <div className="flex items-center justify-between bg-[#00AA6C] p-4 text-white">
            <div>
              <h2 className="font-bold">TripMate AI 🌍</h2>
              <p className="text-xs text-white/90">
                Your travel companion
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full px-2 text-2xl hover:bg-white/20"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-[#FAF1ED] p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === 'user'
                    ? 'justify-end'
                    : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-wrap break-words
                              rounded-2xl px-3 py-2 text-sm ${
                    message.role === 'user'
                      ? 'rounded-br-sm bg-[#00AA6C] text-white'
                      : 'rounded-bl-sm bg-white text-[#191E23] shadow-sm'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="flex gap-2 border-t bg-white p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a destination..."
              className="min-w-0 flex-1 rounded-xl border border-[#E6DED7]
                         px-3 py-2 text-sm outline-none focus:border-[#00AA6C]"
            />

            <button
              type="submit"
              disabled={!input.trim()}
              className="rounded-xl bg-[#00AA6C] px-4 py-2 text-sm
                         font-semibold text-white hover:bg-emerald-700
                         disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}

      {/* Floating button */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-14 w-14 items-center justify-center rounded-full
                     bg-[#00AA6C] text-2xl text-white shadow-lg
                     transition hover:scale-105 hover:bg-emerald-700"
          aria-label={isOpen ? 'Close TripMate chat' : 'Open TripMate chat'}
        >
         {isOpen ? '×' : '🤖'}
        </button>
      </div>
    </div>
  );
}

export default AIChat;


