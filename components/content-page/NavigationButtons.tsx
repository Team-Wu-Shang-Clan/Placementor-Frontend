import React from 'react';
import Link from 'next/link';

interface NavigationButtonsProps {
  previousResourceId?: string;
  nextResourceId?: string;
  onMarkComplete: () => void;
  isCompleted: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  previousResourceId,
  nextResourceId,
  onMarkComplete,
  isCompleted
}) => {
  return (
    <div className="flex justify-between items-center py-4 px-6 border-t">
      <Link 
        href={previousResourceId ? `/resource/${previousResourceId}` : '#'}
        className={`flex items-center gap-2 text-gray-600 hover:text-gray-800 ${!previousResourceId && 'invisible'}`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Previous Resource
      </Link>

      <button
        onClick={onMarkComplete}
        className={`px-4 py-2 rounded-md flex items-center gap-2 ${
          isCompleted 
            ? 'bg-gray-100 text-gray-600' 
            : 'bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50'
        }`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        {isCompleted ? 'Completed' : 'Mark as Complete'}
      </button>

      <Link 
        href={nextResourceId ? `/resource/${nextResourceId}` : '#'}
        className={`flex items-center gap-2 text-white bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700 ${!nextResourceId && 'invisible'}`}
      >
        Next Resource
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default NavigationButtons; 