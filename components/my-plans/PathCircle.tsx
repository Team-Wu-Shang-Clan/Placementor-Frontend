import React from 'react';

interface PathCircleProps {
  number: number;
  isLocked?: boolean;
  isActive?: boolean;
}

const PathCircle: React.FC<PathCircleProps> = ({
  number,
  isLocked = true,
  isActive = false
}) => {
  return (
    <div className={`
      w-12 h-12 rounded-full flex items-center justify-center
      ${isActive ? 'bg-purple-600 text-white' : 'bg-gray-200'}
      ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-purple-500'}
    `}>
      {isLocked ? (
        <span className="text-gray-500">🔒</span>
      ) : (
        <span className="font-semibold">{number}</span>
      )}
    </div>
  );
};

export default PathCircle; 