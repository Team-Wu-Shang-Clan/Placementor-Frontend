import React from 'react';

interface YourProgressProps {
  day: number;
  totalDays: number;
  percentComplete: number;
  streak: number;
  timeToday: number;
}

const YourProgress: React.FC<YourProgressProps> = ({
  day,
  totalDays,
  percentComplete,
  streak,
  timeToday
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold flex items-center gap-2">
          <span className="text-purple-600">✨</span>
          Your Progress
        </h3>
      </div>
      <div className="text-sm text-gray-600 mb-2">
        Day {day}/{totalDays}
        <span className="float-right text-green-600">{percentComplete}% Complete</span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <span className="text-orange-400">🔥</span>
          <span>{streak} day</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-400">⏰</span>
          <span>{timeToday} min</span>
        </div>
      </div>
      <button className="w-full bg-green-500 text-white rounded-lg py-2 mt-4 hover:bg-green-600">
        Start Today's Learning
      </button>
    </div>
  );
};

export default YourProgress; 