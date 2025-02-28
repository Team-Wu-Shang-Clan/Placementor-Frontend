'use client'

import { useState, useEffect, useRef } from 'react'
import {
    Mic, MicOff, Video, VideoOff,
    MessageSquare, Phone, MoreVertical, X
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from 'next/navigation'

export default function AIInterviewPage() {
    // Router for navigation
    const router = useRouter()

    // State for controls
    const [isMuted, setIsMuted] = useState(false)
    const [isVideoOn, setIsVideoOn] = useState(true)
    const [isChatOpen, setIsChatOpen] = useState(false)
    const [interviewTime, setInterviewTime] = useState(0)
    const [currentQuestion] = useState("Tell me about your experience with React and Next.js.")
    const [isCallEnded, setIsCallEnded] = useState(false)

    // Ref for user video element
    const userVideoRef = useRef<HTMLVideoElement>(null);

    const streamRef = useRef<MediaStream | null>(null);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVideoOn, isCallEnded])

    // Handle mute/unmute
    useEffect(() => {
        if (streamRef.current) {
            streamRef.current.getAudioTracks().forEach(track => {
                track.enabled = !isMuted
            })
        }
    }, [isMuted])

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
        }, 1000)
    }

    // Handle chat toggle with animation considerations
    const toggleChat = () => {
        setIsChatOpen(!isChatOpen)
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
                        className="fixed right-0 top-0 bottom-0 w-80 bg-gray-800 border-l border-gray-700 p-4 flex flex-col"
                        initial={{ x: 320, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 320, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        }}
                    >
                        <div className="flex justify-between items-center mb-4">
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

                        <div className="flex-1 overflow-y-auto">
                            <motion.div
                                className="p-3 bg-gray-700 rounded-lg mb-2"
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <p className="text-sm">Hello! I&apos;ll be conducting your technical interview today.</p>
                                <span className="text-xs text-gray-400">AI Interviewer</span>
                            </motion.div>
                        </div>

                        <div className="mt-2 flex gap-2">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded"
                            />
                            <motion.button
                                className="px-3 py-2 bg-blue-600 rounded"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}