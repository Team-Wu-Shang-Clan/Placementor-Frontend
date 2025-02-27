'use client'

import ContentEmbed from '@/components/content-page/ContentEmbed';
import NavigationButtons from '@/components/content-page/NavigationButtons';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ContentPageProps {
    id: string;
    title: string;
    description?: string;
    type: 'youtube' | 'docs' | 'leetcode';
    embedUrl: string;
    previousResourceId?: string;
    nextResourceId?: string;
};

const baseUrl = "https://api.example.com/content";

const ContentPage = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [content, setContent] = useState<ContentPageProps | null>(null);

  const handleMarkComplete = () => {
    setIsCompleted(!isCompleted);
    // Here you would typically also make an API call to update the completion status
  };

  const fetchData = async () => {
    try {
      const response: any = await axios.get(baseUrl);
      setContent(response.data);
    } catch (error) {
      console.error('GET Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button className="text-gray-600 hover:text-gray-800 flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Day 7
          </button>
        </div>
      </div>

      {content ? (
        <ContentEmbed
          type={content.type}
          embedUrl={content.embedUrl}
          title={content.title}
          description={content.description}
        />
      ) : (
        <div>Loading...</div>
      )}

      <NavigationButtons
        previousResourceId={content?.previousResourceId}
        nextResourceId={content?.nextResourceId}
        onMarkComplete={handleMarkComplete}
        isCompleted={isCompleted}
      />
    </div>
  );
};

export default ContentPage;
