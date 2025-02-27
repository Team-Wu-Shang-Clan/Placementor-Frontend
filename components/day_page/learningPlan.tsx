'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

export function LearningPlan() {
    const [topics, setTopics] = useState([]);
  
    useEffect(() => {
      async function fetchLearningPlan() {
        try {
          const response = await fetch('/api/learning-plan');
          const data = await response.json();
          setTopics(data.topics || []);
        } catch (error) {
          console.error("Error fetching learning plan:", error);
        }
      }
  
      fetchLearningPlan();
    }, []);
  
    return (
      <Card className="w-full max-w-lg p-4 mt-6">
        <CardHeader>
          <CardTitle> 🎯 What We Will Learn</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            {topics.length > 0 ? (
              topics.map((topic, index) => <li key={index}>{topic}</li>)
            ) : (
              <p>Loading topics...</p>
            )}
          </ul>
        </CardContent>
      </Card>
    );
}