'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  Mic, MicOff, Video, VideoOff, 
  MessageSquare, Phone, MoreVertical, X, Send
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from 'next/navigation'

// Types for TypeScript
type Message = {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

// Sample interview questions
const interviewQuestions = [
  "Tell me about your experience with React and Next.js.",
  "How do you handle state management in large applications?",
  "Describe a challenging technical problem you solved recently.",
  "How do you approach testing in your projects?",
  "What's your experience with TypeScript?",
  "How do you stay updated with the latest web development trends?",
  "Tell me about a time you had to optimize a slow website or application."
]

export default function AIInterviewPage() {
  // Router for navigation
  const router = useRouter()
  
  // State for controls
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [interviewTime, setInterviewTime] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isCallEnded, setIsCallEnded] = useState(false)
  
  // Chat functionality
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Hello! I'll be conducting your technical interview today. Let's get started with the first question.",
      timestamp: new Date()
    }
  ])
  const [newMessage, setNewMessage] = useState('')
  const chatEndRef = useRef<HTMLDivElement>(null)
  
  // Refs for user video element and media stream
  const userVideoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  
  // Get current question from the array
  const currentQuestion = interviewQuestions[currentQuestionIndex]
  
  // Timer for interview duration
  useEffect(() => {
    const timer = setInterval(() => {
      setInterviewTime(prev => prev + 1)
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])
  
  // Access user camera
  useEffect(() => {
    async function setupUserCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: true, 
          audio: true 
        })
        
        if (userVideoRef.current) {
          userVideoRef.current.srcObject = stream
        }
        
        streamRef.current = stream
        
        // Respect mute settings
        streamRef.current.getAudioTracks().forEach(track => {
          track.enabled = !isMuted
        })
      } catch (error) {
        console.error("Error accessing camera or microphone:", error)
      }
    }
    
    if (isVideoOn && !isCallEnded) {
      setupUserCamera()
    } else if (streamRef.current) {
      // Stop all tracks if video is turned off
      streamRef.current.getTracks().forEach(track => track.stop())
      streamRef.current = null
    }
    
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
      }
    }
  }, [isVideoOn, isCallEnded])
  
  // Handle mute/unmute
  useEffect(() => {
    if (streamRef.current) {
      streamRef.current.getAudioTracks().forEach(track => {
        track.enabled = !isMuted
      })
    }
  }, [isMuted])
  
  // Scroll to bottom of chat when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])
  
  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0')
    const secs = (seconds % 60).toString().padStart(2, '0')
    return `${mins}:${secs}`
  }
  
  // Handle ending the call
  const handleEndCall = () => {
    // Stop all media tracks
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
    }
    
    // Set call ended state - this will trigger UI change
    setIsCallEnded(true)
    
    // After a short delay, navigate to results or exit page
    setTimeout(() => {
      router.push('/interview-results') // Replace with your actual results page path
    }, 1500)
  }
  
  // Handle chat toggle
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }
  
  // Handle sending a new message
  const handleSendMessage = () => {
    if (!newMessage.trim()) return
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: newMessage,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setNewMessage('')
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      // Move to next question if available
      if (currentQuestionIndex < interviewQuestions.length - 1) {
        const nextIndex = currentQuestionIndex + 1
        setCurrentQuestionIndex(nextIndex)
        
        // AI responds with next question
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: `Thank you for your answer. Let's move on to the next question: ${interviewQuestions[nextIndex]}`,
          timestamp: new Date()
        }
        
        setMessages(prev => [...prev, aiResponse])
      } else {
        // If all questions have been asked
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: "Thank you for all your answers. We've completed all the questions. Do you have any questions for me?",
          timestamp: new Date()
        }
        
        setMessages(prev => [...prev, aiResponse])
      }
    }, 1000)
  }
  
  // Handle pressing Enter to send message
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }
  
  // Format message timestamp
  const formatMessageTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
  
  // If call ended, show end screen
  if (isCallEnded) {
    return (
      <motion.div 
        className="h-screen flex items-center justify-center bg-gray-900 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-4">Interview Ended</h1>
            <p className="text-xl mb-6">Thank you for your participation!</p>
            <p className="text-gray-400 mb-8">Redirecting to results...</p>
          </motion.div>
        </div>
      </motion.div>
    )
  }
  
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white overflow-hidden">
      {/* Header */}
      <motion.div 
        className="flex justify-between items-center p-4 border-b border-gray-700"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center">
          <h1 className="text-xl font-medium">Technical Interview</h1>
          <span className="ml-4 text-sm text-gray-400">{formatTime(interviewTime)}</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
            <MoreVertical size={20} />
          </button>
        </div>
      </motion.div>
      
      {/* Main content - animated to shift left when chat opens */}
      <motion.div 
        className="flex-1 flex overflow-hidden p-4 gap-4"
        animate={{ 
          marginRight: isChatOpen ? "320px" : "0px" 
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30 
        }}
      >
        {/* AI Interviewer */}
        <motion.div 
          className="w-1/2 rounded-lg overflow-hidden relative bg-gray-800"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {/* AI Avatar placeholder */}
          <div className="absolute top-2 left-2 px-2 py-1 bg-black/50 rounded text-xs">
            AI Interviewer
          </div>
          
          <div className="h-full flex flex-col">
            {/* AI video/avatar area */}
            <div className="flex-1 flex items-center justify-center">
              <motion.div 
                className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  delay: 0.3
                }}
              >
                <span className="text-3xl font-bold">AI</span>
              </motion.div>
            </div>
            
            {/* Current question */}
            <motion.div 
              className="p-4 bg-black/30"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              key={currentQuestion} // Key changes when question changes to trigger animation
            >
              <p className="text-sm font-medium">{currentQuestion}</p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* User video */}
        <motion.div 
          className="w-1/2 rounded-lg overflow-hidden relative bg-gray-800"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="absolute top-2 left-2 px-2 py-1 bg-black/50 rounded text-xs">
            You
          </div>
          
          {isVideoOn ? (
            <video
              ref={userVideoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="h-full flex items-center justify-center">
              <motion.div 
                className="w-32 h-32 rounded-full bg-gray-600 flex items-center justify-center"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  delay: 0.4
                }}
              >
                <span className="text-3xl">You</span>
              </motion.div>
            </div>
          )}
          
          {/* Muted indicator */}
          <AnimatePresence>
            {isMuted && (
              <motion.div 
                className="absolute bottom-4 right-4 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MicOff size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      
      {/* Control bar */}
      <motion.div 
        className="p-4 flex justify-center items-center gap-2 border-t border-gray-700"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        {/* Mic toggle */}
        <motion.button 
          className={`p-3 rounded-full ${isMuted ? 'bg-red-500' : 'bg-gray-700 hover:bg-gray-600'}`}
          onClick={() => setIsMuted(!isMuted)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
        </motion.button>
        
        {/* Video toggle */}
        <motion.button 
          className={`p-3 rounded-full ${!isVideoOn ? 'bg-red-500' : 'bg-gray-700 hover:bg-gray-600'}`}
          onClick={() => setIsVideoOn(!isVideoOn)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {isVideoOn ? <Video size={24} /> : <VideoOff size={24} />}
        </motion.button>
        
        {/* Chat toggle */}
        <motion.button 
          className={`p-3 rounded-full ${isChatOpen ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'}`}
          onClick={toggleChat}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <MessageSquare size={24} />
          {/* Notification badge for new messages */}
          {!isChatOpen && messages.length > 1 && (
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">
              !
            </span>
          )}
        </motion.button>
        
        {/* End call */}
        <motion.button 
          className="p-3 rounded-full bg-red-500 hover:bg-red-600"
          onClick={handleEndCall}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Phone size={24} />
        </motion.button>
      </motion.div>
      
      {/* Chat sidebar - animated entry/exit */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            className="fixed right-0 top-0 bottom-0 w-80 bg-gray-800 border-l border-gray-700 flex flex-col"
            initial={{ x: 320, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 320, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
          >
            {/* Chat header */}
            <div className="p-4 flex justify-between items-center border-b border-gray-700">
              <h2 className="font-bold">Chat</h2>
              <motion.button 
                className="p-1 hover:bg-gray-700 rounded-full flex items-center justify-center"
                onClick={toggleChat}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
            </div>
            
            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4">
              {messages.map((message) => (
                <motion.div 
                  key={message.id}
                  className={`mb-4 ${message.sender === 'ai' ? 'mr-12' : 'ml-12'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`p-3 rounded-lg ${
                    message.sender === 'ai' ? 'bg-gray-700' : 'bg-blue-600'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-400">
                      {message.sender === 'ai' ? 'AI Interviewer' : 'You'}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">
                      {formatMessageTime(message.timestamp)}
                    </span>
                  </div>
                </motion.div>
              ))}
              <div ref={chatEndRef} />
            </div>
            
            {/* Chat input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your answer..."
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500"
                />
                <motion.button 
                  className="p-2 bg-blue-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}