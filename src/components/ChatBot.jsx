import React, { useState, useRef, useEffect } from "react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI Assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (inputValue.trim() === "") return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thanks for your message. I'm an AI assistant demo.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating Chat Icon */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="
            fixed bottom-5 right-5 sm:bottom-6 sm:right-6 
            w-14 h-14 rounded-full 
            bg-[#2F4A55] 
            shadow-xl hover:scale-105 hover:bg-[#355A66]
            transition-all duration-300
            flex items-center justify-center z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="
          fixed bottom-4 right-4 sm:bottom-6 sm:right-6
          w-[94%] sm:w-[420px]
          h-[85vh] sm:h-[520px]
          bg-white
          rounded-2xl
          shadow-2xl
          flex flex-col
          border border-gray-200
          backdrop-blur-lg
          animate-fade-in-up
          z-50"
        >

          {/* Header */}
          <div className="
              flex items-center justify-between 
              px-4 py-3
              bg-gradient-to-r from-[#315262] to-[#1F3A48]
              rounded-t-2xl
              shadow-md"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#EFAB47] flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-white text-base sm:text-lg">
                AI Assistant
              </h3>
            </div>

            <button
              onClick={toggleChat}
              className="text-white/80 hover:text-white transition-all"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            className="
            flex-1 overflow-y-auto 
            px-4 py-3
            bg-gray-50
            space-y-3"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`
                    max-w-[80%] sm:max-w-[70%]
                    px-4 py-3
                    text-sm sm:text-base
                    rounded-2xl
                    shadow-sm
                    ${
                      msg.sender === "user"
                        ? "bg-white/90 text-gray-800 rounded-br-none border border-gray-200"


                        : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                    }
                  `}
                >
                  <p>{msg.text}</p>
                  <p className="text-[10px] sm:text-xs mt-1 opacity-70">
                    {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="
            p-3 sm:p-4
            border-t border-gray-200
            bg-white
            rounded-b-2xl"
          >
            <div className="flex shadow-inner rounded-xl overflow-hidden">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="
                  flex-1 
                  px-4 py-3
                  border-none 
                  focus:outline-none
                  focus:ring-0
                  text-sm sm:text-base
                  placeholder-gray-500 text-[#315262]"
              />

              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className={`
                  px-5
                  flex items-center justify-center
                  bg-[#2F4A55] text-white
                  hover:bg-[#355A66]
                  transition-all
                  ${!inputValue.trim() && "opacity-40 cursor-not-allowed"}
                `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

        </div>
      )}
    </>
  );
};

export default ChatBot;
