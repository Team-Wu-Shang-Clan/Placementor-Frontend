import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

interface ContentEmbedProps {
  type: 'youtube' | 'docs' | 'leetcode';
  embedUrl: string;
  title: string;
  description?: string;
}

const ContentEmbed: React.FC<ContentEmbedProps> = ({
  type,
  embedUrl,
  title,
  description
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h1>
        {description && (
          <p className="text-gray-600">{description}</p>
        )}
      </div>

      <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
        {(type === 'youtube' || 'docs') && (
          <iframe
            src={embedUrl}
            className="w-full h-full"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        )}
        {type === 'leetcode' && (
          <Button>
            <Link href={embedUrl}>Open Challenge in LeetCode</Link>
          </Button>
        )}
      </div>

      <div className="mt-4 flex justify-end">
        <button className="text-gray-600 hover:text-gray-800 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Open in New Tab
        </button>
      </div>
    </div>
  );
};

export default ContentEmbed; 