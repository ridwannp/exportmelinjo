import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react'
import { getChatResponse, getSuggestedQuestions, initializeGemini } from '../services/geminiService'

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! 👋 I\'m MelinjoExport\'s AI assistant. I can help you with information about our melinjo products, export capabilities, certifications, and more. How can I assist you today?'
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const suggestedQuestions = getSuggestedQuestions()

  useEffect(() => {
    // Initialize Gemini on mount
    initializeGemini()
  }, [])

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    // Focus input when chat opens
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSendMessage = async (message) => {
    if (!message.trim() || isLoading) return

    const userMessage = message.trim()
    setInputValue('')
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await getChatResponse(userMessage)
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again or contact us via WhatsApp at +62 812-3456-7890' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSendMessage(inputValue)
  }

  const handleSuggestedQuestion = (question) => {
    handleSendMessage(question)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`chatbot-button ${isOpen ? 'chatbot-button-hidden' : ''}`}
        aria-label="Open chat"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'chatbot-window-open' : ''}`}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <Bot size={20} />
            </div>
            <div>
              <h4 className="chatbot-title">MelinjoExport Assistant</h4>
              <span className="chatbot-status">
                <span className="chatbot-status-dot"></span>
                Online
              </span>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="chatbot-close"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`chatbot-message ${msg.role === 'user' ? 'chatbot-message-user' : 'chatbot-message-assistant'}`}
            >
              <div className={`chatbot-message-avatar ${msg.role === 'user' ? 'chatbot-message-avatar-user' : ''}`}>
                {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
              </div>
              <div className={`chatbot-message-bubble ${msg.role === 'user' ? 'chatbot-message-bubble-user' : ''}`}>
                {msg.content}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="chatbot-message chatbot-message-assistant">
              <div className="chatbot-message-avatar">
                <Bot size={14} />
              </div>
              <div className="chatbot-message-bubble chatbot-typing">
                <Loader2 size={16} className="chatbot-typing-icon" />
                <span>Thinking...</span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        {messages.length <= 1 && !isLoading && (
          <div className="chatbot-suggestions">
            <span className="chatbot-suggestions-label">Suggested questions:</span>
            <div className="chatbot-suggestions-list">
              {suggestedQuestions.slice(0, 3).map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="chatbot-suggestion-btn"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <form onSubmit={handleSubmit} className="chatbot-input-container">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your question..."
            className="chatbot-input"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="chatbot-send"
            disabled={!inputValue.trim() || isLoading}
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  )
}

export default ChatBot
