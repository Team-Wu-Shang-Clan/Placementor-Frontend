'use client'

import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import ScoreCard from "./ScoreCard"

export default function MockInterviewResults() {
  // Sample data - replace with actual data from your API
  const interviewData = {
    overallScore: 7.5,
    technicalScore: 8,
    communicationScore: 7,
    problemSolvingScore: 7.5,
    strengths: [
      "Explaining TCP/IP concepts",
      "Understanding of routing algorithms"
    ],
    areasToImprove: [
      "Deeper knowledge of network security protocols",
      "More precise terminology"
    ]
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
          <span className="text-purple-600">⦿</span>
        </div>
        <h1 className="text-2xl font-bold">Mock Interview Results</h1>
      </div>

      {/* Score Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <ScoreCard 
          score={interviewData.overallScore} 
          label="Overall Score" 
          bgColor="bg-purple-50" 
          textColor="text-purple-600" 
        />
        <ScoreCard 
          score={interviewData.technicalScore} 
          label="Technical" 
          bgColor="bg-gray-50" 
          textColor="text-gray-600" 
        />
        <ScoreCard 
          score={interviewData.communicationScore} 
          label="Communication" 
          bgColor="bg-gray-50" 
          textColor="text-gray-600" 
        />
        <ScoreCard 
          score={interviewData.problemSolvingScore} 
          label="Problem Solving" 
          bgColor="bg-gray-50" 
          textColor="text-gray-600" 
        />
      </div>

      {/* Strengths and Areas to Improve */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <Card className="bg-green-50 border-0">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-green-700 mb-4">Strengths</h2>
            <ul className="space-y-3">
              {interviewData.strengths.map((strength, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-green-700">{strength}</span>
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
              {interviewData.areasToImprove.map((area, index) => (
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
