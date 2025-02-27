import React from 'react';

interface Challenge {
  title: string;
  completed: number;
  total: number;
  coins: number;
}

interface DailyChallengesProps {
  challenges: Challenge[];
}

const DailyChallenges: React.FC<DailyChallengesProps> = ({ challenges }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold flex items-center gap-2">
          <span className="text-blue-600">📅</span>
          Daily Challenges
        </h3>
        <button className="text-blue-600 text-sm hover:text-blue-700">
          VIEW ALL
        </button>
      </div>
      <div className="space-y-3">
        {challenges.map((challenge, index) => (
          <div key={index} className="flex justify-between items-center">
            <div>
              <div className="font-medium">{challenge.title}</div>
              <div className="text-sm text-gray-500">
                {challenge.completed}/{challenge.total} completed
              </div>
            </div>
            <div className="flex items-center gap-1 text-yellow-500">
              <span>🪙</span>
              <span>{challenge.coins}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyChallenges; 