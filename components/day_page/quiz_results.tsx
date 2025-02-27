'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Check, Clock } from "lucide-react"

export default function QuizResults() {
  // Sample data - in a real app, you'd fetch this from an API
  const quizData = {
    score: 8,
    totalQuestions: 10,
    timeSpent: 8, // minutes
    strongAreas: ["OSI Model", "TCP/IP", "Routing"],
    areasToImprove: ["Network Security", "Subnetting"]
  }

  // Calculate percentage for the circular progress
  const percentage = (quizData.score / quizData.totalQuestions) * 100
  
  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="text-blue-600">©</span>
        </div>
        <h1 className="text-2xl font-bold">Quiz Results</h1>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Score Circle */}
        <Card className="flex-1 p-6 flex flex-col items-center">
          <div className="relative w-36 h-36">
            <div className="w-full h-full rounded-full bg-blue-100"></div>
            <div 
              className="absolute top-0 left-0 w-full h-full"
              style={{
                background: `conic-gradient(#4285F4 ${percentage}%, transparent 0%)`,
                borderRadius: '50%',
                clipPath: 'circle(50%)'
              }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <span className="text-4xl font-bold text-blue-600">{quizData.score}/{quizData.totalQuestions}</span>
            </div>
          </div>
          <p className="mt-4 text-gray-500">Score</p>
        </Card>
        
        {/* Time Spent */}
        <Card className="flex-1 p-6 flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Clock className="w-12 h-12 text-gray-500" />
          </div>
          <span className="text-2xl font-semibold">{quizData.timeSpent} minutes</span>
          <p className="text-gray-500">Time spent</p>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strong Areas */}
        <Card className="bg-green-50 border-0">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-green-700 mb-4">Strong Areas</h2>
            <ul className="space-y-3">
              {quizData.strongAreas.map((area, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-green-700">{area}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        {/* Areas to Improve */}
        <Card className="bg-amber-50 border-0">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-amber-700 mb-4">Areas to Improve</h2>
            <ul className="space-y-3">
              {quizData.areasToImprove.map((area, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-amber-700">•</span>
                  <span className="text-amber-700">{area}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}