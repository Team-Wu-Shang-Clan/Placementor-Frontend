'use client'

import { useRouter } from 'next/navigation'; // Changed from next/router to next/navigation
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

type QuizType = {
    id: string,
    title: string,
    description: string,
    type: 'Mock Interview' | 'Quiz',
    completed: 'Completed' | 'Not Completed',
}

export function Practice() {
    const [quizzes, setQuizzes] = useState<QuizType[]>([]);
    const router = useRouter();
  
    useEffect(() => {
      async function fetchQuizzes() {
        try {
          const response = await fetch('/api/practice');
          const data = await response.json();
          setQuizzes(data || []);
        } catch (error) {
          console.error("Error fetching practice data:", error);
        }
      }
  
      fetchQuizzes();
    }, []);
  
    return (
      <Card className="w-full max-w-lg p-4 mt-6">
        <CardHeader className="flex items-center gap-2">
          <ClipboardList className="text-green-500" />
          <CardTitle>Practice</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {quizzes.length > 0 ? (
            quizzes.map((quiz, index) => (
              <Card key={quiz.id || index} className="p-4">
                <h3 className="text-lg font-semibold">{quiz.title}</h3>
                <p className="text-sm mb-2">{quiz.description}</p>
                <p className="text-sm">Type: {quiz.type}</p>
                <p className="text-sm">Status: {quiz.completed}</p>
                <Button onClick={() => router.push(`/practice/${quiz.id}`)} className="mt-2">View Results</Button>
              </Card>
            ))
          ) : (
            <p>Loading practice items...</p>
          )}
        </CardContent>
      </Card>
    );
  }