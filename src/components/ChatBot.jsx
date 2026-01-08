import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
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
                {msg.role === 'assistant' ? (
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                      table: ({node, ...props}) => <div className="overflow-x-auto my-2"><table className="min-w-full border-collapse border border-gray-300 text-sm" {...props} /></div>,
                      thead: ({node, ...props}) => <thead className="bg-gray-100" {...props} />,
                      th: ({node, ...props}) => <th className="border border-gray-300 px-3 py-2 text-left font-semibold" {...props} />,
                      td: ({node, ...props}) => <td className="border border-gray-300 px-3 py-2" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc ml-4 my-2" {...props} />,
                      ol: ({node, ...props}) => <ol className="list-decimal ml-4 my-2" {...props} />,
                      p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                      a: ({node, ...props}) => <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                ) : (
                  msg.content
                )}
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
